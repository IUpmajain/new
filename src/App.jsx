import React from 'react'
import Home from './component/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductData from './component/ProductData'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<ProductData/>}/>
      </Routes>
    </Router>
  )
}

export default App