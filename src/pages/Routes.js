import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Register from './Authentication/Register'
export default function comRoutes() {
  return (
    <>
   <Routes>
    <Route path='/*' element={<Frontend/>}/> 
    <Route path='/register' element={<Register/>}/>
    </Routes> 
    </>
  )
}
