import { persons } from "../persons.js"
import Card from '../components/card/Card.jsx'
import { useState, useContext } from "react"
import GlobalContext from "../context/GlobalContext.js"
import BtnTop from "../components/BtnTop.jsx"

export default function IndexPersons() {

    const [search, setSearch] = useState('')

    const { changeLang } = useContext(GlobalContext)

    const filteredPersons = persons.filter(p =>
        p.person.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <div className="flexListCharacter">
                <div className="headIndex">
                    <div className="col-100">
                        <h1>{changeLang ? 'List of all characters' : 'Elenco di tutti i personaggi'}</h1>
                    </div>
                    <input type="text" placeholder="search person" value={search} onChange={(e) => setSearch(e.target.value)} className="filter" />
                </div>
                {search ?
                    <div className="row">
                        {filteredPersons.map(p =>
                            <Card key={p.id} item={p} />
                        )}
                    </div> :
                    <div className="row">
                        {persons.map((p) => (
                            <div key={p.id.toString()}>
                                <Card item={p} />
                            </div>
                        ))}
                    </div>}
            </div>
            <BtnTop />
        </>
    )
}