import { NavLink } from "react-router-dom";

export default function Nav() {

    return (

        <>
            <div className="header">
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

            </div>
        </>
    )
}