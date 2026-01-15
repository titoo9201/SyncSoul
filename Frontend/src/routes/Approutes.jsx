import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from '../PROFILE/Login'
import Register from '../PROFILE/Register'
import Home from '../PROFILE/Home'
import Project from '../PROFILE/Project'

const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/project' element={<Project/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Approutes
