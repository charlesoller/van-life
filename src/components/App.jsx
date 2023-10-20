import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "../../server"

import Home from "./Home"
import About from "./About"
import Vans from "./Vans"
import VanDetail from './VanDetail';
import Layout from "./Layout"
import HostLayout from './HostLayout';
import HostDashboard from './HostDashboard';
import HostIncome from './HostIncome';
import HostReviews from './HostReviews';

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
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}
