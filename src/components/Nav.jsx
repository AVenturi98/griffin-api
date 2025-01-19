import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

export default function Nav() {

    const { changeLang, setLangITA, setLangEGN } = useContext(GlobalContext)

    return (

        <>
            <nav className="header">
                <div className="hidden">
                    BLANK OUTLET
                </div>
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
                <div className="change-lang">
                    <div className="tooltip-lang">
                        <button type="button" onClick={changeLang ? () => setLangITA() : () => setLangEGN()} id="btn_lang" >{changeLang ? 'ITA' : 'ENG'}</button>
                        <p className="tooltip-text" >{changeLang ? 'Change language' : 'Cambia lingua'}</p>
                    </div>
                </div>
            </nav>
        </>
    )
}