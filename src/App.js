import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import HelpAs from './components/HelpAs/HelpAs'
import Market from './components/Market/Market'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
  <>
     <BrowserRouter>
       <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/HelpAs" element={<HelpAs />}></Route>
      <Route path="/Market" element={<Market />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App