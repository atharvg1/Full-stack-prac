import React from 'react'
import {useEffect} from 'react'


const Navbar = ({color}) => {

  //case 1 : always runs
  useEffect(() => {
    alert("run on every render")
  })
  
  //case2 : runs only first time
  useEffect(() => {
    alert("Hey welcome to page. the first render")
  }, [])

  //  case 3 :run only when certin value change
  useEffect(()=>{
    alert("the color was chaged")

  //IMP  return funtion  runs when component is unmounted
   //Eg:
    //  return ()=>{
    //   alert('component unmounted')
    //  }
    
  },[color])

   
  return (
    <div>
      hey i am navbar color of {color} he..
    </div>
  )
}

export default Navbar
