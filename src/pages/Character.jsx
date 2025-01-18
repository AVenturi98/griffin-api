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
                {persons.map((name, i) =>
                    <ul key={i}>
                        <li id='name_quote'>
                            {name.person}
                        </li>
                        <li className='quote'>{changeLang ? name.quote : name.quoteITA}</li>
                    </ul>
                )}
            </div>
            <BtnTop />
        </>

    )
}