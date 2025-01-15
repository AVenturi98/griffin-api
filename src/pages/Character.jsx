import { persons } from '../persons'

export default function Character() {

    return (
        <>
            <div className='flexListCharacter'>
                <h1 className='titleName'>Le frasi iconiche dei personaggi</h1>
                {persons.map((name, i) =>
                    <ul key={i}>
                        <li id='name_quote'>
                            {name.person}
                        </li>
                        <li className='quote'>{name.quote}</li>
                    </ul>
                )}
            </div>
        </>

    )
}