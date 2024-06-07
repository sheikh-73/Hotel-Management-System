import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home/Home";
import About from "./components/about/About";
import Availability from "./components/availability/Availability";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import Reservation from "./components/reservation/Reservation";
import Review from "./components/review/Review";
import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <>
      <div className="app">
        <Navbar/>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/availability' element={<Availability/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/reservation' element={<Reservation/>} />
          <Route path='/review' element={<Review/>} />
          
        </Routes>


      </div>
    </>
  )
}

export default App
