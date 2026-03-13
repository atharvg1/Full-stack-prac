import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [name,setName] =useState("hello")

  const [form,setForm]=useState({email:"", phone:""})

  const msg= ()=>{
    alert('hello i am button')
  }
  
  const handleChange= (e)=>{
  setName(e.target.value)
  }
  
  const formChange= (e)=>{
  setForm({...form,[e.target.name]:e.target.value})
  console.log(form)
  }

  


  return (
    <>
      <div className="button">
        <button onClick={msg}>click me</button>
      </div>

       <div className="color" onMouseOver={msg}>
        hey i am red <br/><b>hover me</b>
      </div> 

      <input type='text' value={name} onChange={handleChange}/>

      <input type='text' name='email' value={form.email?form.email:""} onChange={formChange}/>
                
                {/* two diff step look above one carefully and below one too */}
                
      <input type='text' name='phone' value={form.phone} onChange={formChange}/>
    </>
  )
}

export default App
