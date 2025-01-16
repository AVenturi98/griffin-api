import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { persons } from '../persons'

export default function Character() {

    const { changeLang } = useContext(GlobalContext)

    return (
        <>
            <div className='flexListCharacter'>
                <h1 className='titleName'>Le frasi iconiche dei personaggi</h1>
                {persons.map((name, i) =>
                    <ul key={i}>
                        <li id='name_quote'>
                            {name.person}
                        </li>
                        <li className='quote'>{changeLang ? name.quote : name.quoteITA}</li>
                    </ul>
                )}
            </div>
        </>

    )
}