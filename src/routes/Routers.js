import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AllFoods from '../page/AllFoods'
import Cart from '../page/Cart'
import Checkout from '../page/Checkout'
import FoodDetails from '../page/FoodDetails'
import Home from '../page/Home'
import Login from '../page/Login'
import Register from '../page/Register'
export default function Routers() {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/ReactReduxRepo'/>}/>
    <Route path='/ReactReduxRepo' element={<Home/>}/>
    <Route path='/foods' element={<AllFoods/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/foods/:id' element={<FoodDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
  )
}
