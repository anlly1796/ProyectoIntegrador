import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Register } from '../pages/Register'
import { MyNavbar } from '../components/MyNavbar'
import { Search } from '../pages/Search'




export const AppRouter = () => {
  return (
    <>
   
    <MyNavbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="search" element={<Search/>}/>

        
    </Routes>
    
    </>
  )
}
