import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeLayer1} from './layers/HomeLayer1'
import { HomeLayer2} from './layers/HomeLayer2'
import {HomePage} from './pages/HomePage'
function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/2' element={<HomeLayer2/>} />
        <Route path='/1' element={<HomeLayer1/>} />
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
