import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import Cart from './Pages/Cart/cart'
import Order from './Pages/placeOrder/placeOrder'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<placeOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
