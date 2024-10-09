import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Login from './Login'

function App() {
  

  return (
    <>
<Nav/>

  <div className="bg-black h-[1px] rounded-sm"></div>
 <Login/>
    </>
   
  )
}

export default App
