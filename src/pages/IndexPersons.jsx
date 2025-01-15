import { persons } from "../persons.js"
import Card from '../components/card/Card.jsx'

export default function IndexPersons() {


    return (
        <>
            <div className="flexListCharacter">
                <div className="col-100">
                    <h1>Elenco di tutti i personaggi</h1>
                </div>
                <div className="row">
                    {persons.map((pers, i) => (
                        <div key={i} className="col-6">
                            <Card person={pers.person} image={pers.image} quote={pers.quote} id={pers.id} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}