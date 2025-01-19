import Card from '../components/card/Card.jsx'
import { useContext } from "react"
import GlobalContext from "../context/GlobalContext.js"
import Pagination from "../components/Pagination.jsx"
import Search from '../components/Search.jsx'

export default function IndexPersons() {

    const { changeLang, currentPersons } = useContext(GlobalContext)

    return (
        <>
            <div className="flexListCharacter">
                <div className="headIndex">
                    <div className="col-100">
                        <h1>{changeLang ? 'List of all characters' : 'Elenco di tutti i personaggi'}</h1>
                    </div>
                    <Search />
                </div>
                <div className="row">
                    {currentPersons.map(p => (
                        <Card key={p.id} item={p} />
                    ))}
                </div>
                <Pagination />
            </div >
        </>
    )
}