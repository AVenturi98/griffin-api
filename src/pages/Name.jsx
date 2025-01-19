import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext.js'
import Pagination from '../components/Pagination.jsx'
import Search from '../components/Search.jsx'

export default function Person() {

    const { changeLang, currentPersons } = useContext(GlobalContext)

    return (
        <>
            <div className="flexListName">
                <div className='headIndex'>
                    <h1 className='titleName'>{changeLang ? `All the character names you will find` : 'Tutti i nomi dei personaggi che troverai'}</h1>
                    <Search />
                </div>
                <ol className='name-grid'>
                    {currentPersons.map((name) => (
                        <li key={name.id.toString()} id='name_list'>
                            <NavLink to={`/person/${name.id}`}>{name.person}</NavLink>
                        </li>
                    ))}
                </ol>
            </div>
            <Pagination />
        </>

    )
}