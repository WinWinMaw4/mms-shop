import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Nav from './components/Nav'
import './style.css'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'


const App = () => {
  return (
    <div className="container mx-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
      </div>
  )
}

export default App