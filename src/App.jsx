import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Welcome from './Components/Welcome'
import Dognames from './Components/Dognames'
import Navbar from './Components/Navbar'
import About from './Components/About'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/dogs" element={<Dognames/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        {/* <Route path="/dogs/:specificdog" element={<SpecificDog/>}></Route> */}
      </Routes>
    </div>
  )
}

export default App
