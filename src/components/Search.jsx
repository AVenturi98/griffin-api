import { useContext, useState } from "react"
import GlobalContext from "../context/GlobalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons"
export default function Search() {
    const { search, setSearch } = useContext(GlobalContext)

    function clear() {
        setSearch('')
    }

    return (
        <div className="filter">
            <input type="text" placeholder="search person" value={search} onChange={(e) => setSearch(e.target.value)} className="filter-name " />
            <button type="reset" id="clear-filter" onClick={clear}>
                <FontAwesomeIcon icon={faDeleteLeft} id="icon-filter" />

            </button>
        </div>
    )
}