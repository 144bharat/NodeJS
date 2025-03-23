import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes,setJokes] = useState([])
  useEffect(()=>{ //BG - useEffect is used as a callback which call automatically when the application start at the init time.
    axios.get('/baseApi/jokes')
    .then((res)=>{
      setJokes(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  })
  return (
    <>
      <h1>My First React Application</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((joke,index) =>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
