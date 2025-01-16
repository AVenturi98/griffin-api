import { persons } from '../persons.js'
import { NavLink } from 'react-router-dom'

export default function Person() {

    const id = persons.find(p => p.id == persons.id)

    return (
        <>
            <div className="flexListName">
                <h1 className='titleName'>Tutti i nomi dei personaggi che troverai</h1>
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