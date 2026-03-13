import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"

function App() {
 
  const [count,setCount]= useState(0);
  
  const [color,setColor]= useState(0);

 
  
  useEffect(()=>{
    alert("count was chaged")
    setColor(color + 1)
  },[count])

  return (
    <>
    <Navbar color = {"cyanblue" + color} />
      <div>The count is {count}</div>
      <button onClick={()=>{
        setCount(count+1)
      }}>update count</button>
    </>
  )
}

export default App
