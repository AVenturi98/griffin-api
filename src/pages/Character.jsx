import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { persons } from '../persons'
import BtnTop from '../components/BtnTop'

export default function Character() {

    const { changeLang } = useContext(GlobalContext)

    return (
        <>
            <div className='flexListCharacter'>
                <h1 className='titleName'>{changeLang ? `The characters' iconic phrases` : 'Le frasi iconiche dei personaggi'}</h1>
                {persons.map((person) =>
                    <ul key={person.id}>
                        <li id='name_quote'>
                            {person.person}
                        </li>
                        <li className='quote'>{changeLang ? person.quoteENG : person.quoteITA}</li>
                    </ul>
                )}
            </div>
        </>

    )
}