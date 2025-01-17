import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Name from '../src/pages/Name'
import Character from '../src/pages/Character'
import DefaultLayout from '../src/layout/DefaultLayout'
import BlankLayout from '../src/layout/BlankLayout'
import Lost from '../src/layout/Lost'
import IndexPersons from '../src/pages/IndexPersons'
import DettailsPers from '../src/pages/DettailsPers'

export default function Router() {


    return (
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
    )
}