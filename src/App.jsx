
import GlobalContext from "./context/GlobalContext"
import { useState } from 'react'
import Router from "../router/Router"

function App() {

    const [post, setPost] = useState('')

    const [changeLang, setChangeLang] = useState(true)

    function setLangITA() {
        setChangeLang(false)
    }

    function setLangEGN() {
        setChangeLang(true)
    }

    return (
        <>
            <GlobalContext.Provider value={{ changeLang, setLangITA, setLangEGN, post, setPost }}>
                <Router />
            </GlobalContext.Provider>
        </>
    )
}

export default App


// fixed header or btn for return  to top page
// tooltip btn lang
// pagination 
// add clip videos eng
// btn back page
// add pers