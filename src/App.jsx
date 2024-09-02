import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeLayer1} from './layers/HomeLayer1'
function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayer1/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
