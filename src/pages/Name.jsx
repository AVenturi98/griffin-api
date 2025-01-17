import { useContext } from 'react'
import { persons } from '../persons.js'
import { NavLink } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext.js'

export default function Person() {

    const { changeLang } = useContext(GlobalContext)

    return (
        <>
            <div className="flexListName">
                <h1 className='titleName'>{changeLang ? `All the character names you will find` : 'Tutti i nomi dei personaggi che troverai'}</h1>
                <ol>
                    {persons.map((name) => (
                        <li key={name.id.toString()} id='name_list'>
                            <NavLink to={`/person/${name.id}`}>{name.person}</NavLink>
                        </li>
                    ))}
                </ol>
            </div>
        </>

    )
}