import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Login from './component/Login'
import About from './component/About'
import User from './component/User'


function App() {
  
  const router=createBrowserRouter([
   {
    path:"/",
    element:<><Navbar /><Home/></>
   },
   {
    path:"/login",
    element:<><Navbar /><Login/></>
   },  
   {
    path:"/about",
    element:<><Navbar /><About/></>
   },
   
   {
    path:"/user/:userName",
    element:<><Navbar /><User/></>
   },
  ])

  return (
    <>
      
      <Home/>
      
      
      <RouterProvider router={router}/>
    </>
  )
}

export default App
