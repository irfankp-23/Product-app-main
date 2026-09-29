import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProductApi from './Components/ProductApi'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Add from './Components/Add'
import View from './Components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/home' element={<ProductApi/>} />
        <Route path='/view' element={<View/>} />
        <Route path='/add' element={<Add/>} />
      </Routes>
      </BrowserRouter>
           
                 
    </>
  )
}

export default App
