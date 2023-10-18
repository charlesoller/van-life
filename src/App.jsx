import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "../server"

import Home from "./Home"
import About from "./About"
import Header from "./Header"
import Footer from "./Footer"
import Vans from "./Vans"


export default function App() {
  return (
    <div className='app'>
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </div>
  )
}
