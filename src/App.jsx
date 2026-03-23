import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Navbar'
import Home from './Home'
import Skills from './Skills'
import About from './About'
import { Route, Router, Routes } from 'react-router-dom'
import Mainpage from './Mainpage'
import Project from './Project'
import Contact from './Contact'
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  return (
    <>
   

   <Navbar/>

 <Routes>
      <Route path='/' element={<Mainpage/>}></Route>
      <Route path='/home' element={<Mainpage/>}></Route>
      <Route path='/Skills' element={<Skills/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </>
  )
}

export default App
