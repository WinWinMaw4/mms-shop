import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Nav from './components/Nav'
import './style.css'


const App = () => {
  return (
    <div className="container mx-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        
      </Routes>
      </div>
  )
}

export default App