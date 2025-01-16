import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { persons } from './persons'
import GlobalContext from "./context/GlobalContext"
import Home from './pages/Home'
import Name from './pages/Name'
import Character from './pages/Character'
import DefaultLayout from './layout/DefaultLayout'
import BlankLayout from './layout/BlankLayout'
import Lost from './layout/Lost'
import IndexPersons from './pages/IndexPersons'
import DettailsPers from './pages/DettailsPers'

function App() {

  const [changeLang, setChangeLang] = useState(true)

  function setLangITA() {
    setChangeLang(false)
  }

  function setLangEGN() {
    setChangeLang(true)
  }

  return (
    <>
      <GlobalContext.Provider value={{ changeLang, setLangITA, setLangEGN }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Home />}></Route>
              <Route path='/name' element={<Name />}></Route>
              <Route path='/character' element={<Character />}></Route>
              <Route path='/person'>
                <Route index element={<IndexPersons />}></Route>
                <Route path=':id/' element={<DettailsPers />}></Route>
              </Route>
            </Route>
            <Route element={<BlankLayout />}>
              <Route path='*' element={<Lost />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
