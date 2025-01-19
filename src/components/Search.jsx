import { useContext, useState } from "react"
import GlobalContext from "../context/GlobalContext"

export default function Search() {
    const { search, setSearch } = useContext(GlobalContext)

    return (
        <input type="text" placeholder="search person" value={search} onChange={(e) => setSearch(e.target.value)} className="filter" />

    )
}