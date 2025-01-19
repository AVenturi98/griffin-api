
import GlobalContext from "./context/GlobalContext"
import { useState } from 'react'
import Router from "../router/Router"
import BtnTop from "./components/BtnTop"
import { persons } from '../src/persons'


function App() {

    const [post, setPost] = useState('')

    // SEARCH context
    const [search, setSearch] = useState('')

    // CHANGE LANGUAGE context
    const [changeLang, setChangeLang] = useState(true)

    function setLangITA() {
        setChangeLang(false)
    }

    function setLangEGN() {
        setChangeLang(true)
    }
    const filteredPersons = persons.filter(p =>
        p.person.toLowerCase().includes(search.toLowerCase())
    )

    // PAGINATION context
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const totalPages = Math.ceil(filteredPersons.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentPersons = filteredPersons.slice(startIndex, endIndex)


    return (
        <>
            <GlobalContext.Provider value={{ changeLang, setLangITA, setLangEGN, post, setPost, search, setSearch, currentPage, setCurrentPage, startIndex, currentPersons, totalPages }}>
                <Router />
                <BtnTop />
            </GlobalContext.Provider>
        </>
    )
}

export default App


// pagination 
// tooltip btn top
// add clip videos eng
// btn back page
// add pers