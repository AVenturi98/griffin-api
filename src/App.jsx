import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Name from './pages/Name'
import Character from './pages/Character'
import DefaultLayout from './layout/DefaultLayout'
import BlankLayout from './layout/BlankLayout'
import Lost from './layout/Lost'
import IndexPersons from './pages/IndexPersons'
import DettailsPers from './pages/DettailsPers'

function App() {


  return (
    <>
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
    </>
  )
}

export default App
