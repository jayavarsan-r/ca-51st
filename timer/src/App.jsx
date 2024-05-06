import { useEffect, useState } from 'react'
import {useCookies} from 'react-cookie'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [bg , setbg] = useState('white')
  const [tv,settv] = useState(null)
  const [cookie,setcookie,removecookie] = useCookies(['counter'])


    const startt = () =>{
      settv(setInterval(()=>{
        setCount((c) => c+1)
        setcookie('count',count)
      },1000))
    }

    const pauset = () => {
      clearInterval(tv)
    }

    const removet = () =>{
      removecookie('count')
      clearInterval(tv)
    }
  useEffect(() =>{
    if (count %2 === 0){
      setbg('red')
    }else if(count %3 ===0){
      setbg('blue')
    }else{
      setbg('white')
    }
  },[count])

  return (
    <>
      <div style={{background:bg}} >
        <h1 style={{color:'black'}}>{count} </h1>
      </div>
      <button onClick={startt}>start</button>
      <button onClick={pauset}>Pause</button>
      <button onClick={removet}>stop </button>
    </>
  )
}

export default App
