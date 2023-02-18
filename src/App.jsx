import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Nav from './components/Nav'
import './style.css'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Success from './pages/Success'
import 'animate.css';


const App = () => {
  return (
    <div className="container mx-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
      </div>
  )
}

export default App