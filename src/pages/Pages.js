import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cuisine/:type' element={<Cuisine/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/recipe/:name' element={<Recipe/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages