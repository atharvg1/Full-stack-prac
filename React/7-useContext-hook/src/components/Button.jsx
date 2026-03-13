import { useContext } from 'react'
import React, { Component } from 'react'
import Component1 from './Component1'
import counterContext from './useContext'

const Button = () => {
    const value=useContext(counterContext)
  return (
    <div>
     <button onClick={()=>value.setCount((count)=>count+1)}> <span><Component1/></span> Button here</button>
    </div>
  )
}

export default Button
 
