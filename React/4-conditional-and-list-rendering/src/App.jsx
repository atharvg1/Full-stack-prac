import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: 'hey task 1',
      desc:'first todo'
    },

    {
      title:'task 2',
      desc :'second todo'

    } ,

    {
     title:'task 3 ',
     desc :'do this at last'

    },
  ])


  const Todo = ({todo})=>{return (<>
   <div className="todo">{todo.title} </div> 
   <div className="todo">{todo.desc}</div>
   </>)}
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
       
     {/*here conditional rendering */}

      { /* { showbtn ? <button>run after second btn clicked</button> : <button>Btn is false</button>} */}
                       
                       { /*OR*/}
      
      { showbtn && <button>Run on second btn clicked </button>}
      

      {todos.map(todo=>{
        //return <Todo key={todo.title} todo={todo}/>
                    // OR

        return <div key={todo.title}className="m-4 border border-1 border-purple-400">
          <div  className="todo" >{todo.title}</div>
          <div className="t odo">{todo.desc}</div>
        </div>
      })}
      
      <div className="card">
        <button onClick={()=>{setshowbtn(!showbtn)}}>Click to toogle </button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
