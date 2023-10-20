import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "../server"

import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/vans/Vans"
import VanDetail from './pages/vans/VanDetail';
import Layout from "./components/layout/Layout"
import HostLayout from './components/layout/HostLayout';
import HostDashboard from './pages/host/HostDashboard';
import HostIncome from './pages/host/HostIncome';
import HostReviews from './pages/host/HostReviews';
import HostVans from './pages/host/HostVans';
import HostVanDetail from './pages/host/HostVanDetail';

export default function App() {
  return (
    <div className='app'>
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<HostDashboard />} />
              <Route path="income" element={<HostIncome />} />
              <Route path="reviews" element={<HostReviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />} >
                {/* <Route path="/details"/> */}
              </Route>
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}
