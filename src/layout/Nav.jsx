import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {

    const { changeLang, setLangITA, setLangEGN } = useContext(GlobalContext)

    return (

        <>
            <nav className="header">
                <ul id="listNav">
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/name'>Person</NavLink>
                    </li>
                    <li>
                        <NavLink to='/character'>Character</NavLink>
                    </li>
                    <li>
                        <NavLink to='/person'>All persons</NavLink>
                    </li>
                </ul>
                <div>
                    {/* <button type="button" onSubmit={() => filterPerson()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button> */}
                    {/* <input type="text" onSubmit={() => filterPerson()} onChange={(e) => { setSearch(e.target.value) }} value={search} /> */}
                    <button type="button" onClick={changeLang ? () => setLangITA() : () => setLangEGN()} id="btn_lang" >{changeLang ? 'ITA' : 'ENG'}</button>
                </div>

            </nav>
        </>
    )
}