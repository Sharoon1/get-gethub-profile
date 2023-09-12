import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './Home'
import About from './About'
import Footer from '../../component/Footer'
import Topbar from '../../component/Topbar'
import Navbar from '../../component/Header'
export default function index() {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <main>

    <Routes>
      <Route path='/'>
        <Route path='/about' element={<Hero/>}/>
        <Route index element={<About/>}/>
        
      </Route>
    </Routes>
    </main>
    <Footer/>
    </>
  )
}
