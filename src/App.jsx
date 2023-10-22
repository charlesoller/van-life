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
import HostVanDetailLayout from './components/layout/HostVanDetailLayout';
import HostVanDetailDetails from './pages/host/HostVanDetailDetails';
import HostVanDetailPricing from './pages/host/HostVanDetailPricing';
import HostVanDetailPhotos from './pages/host/HostVanDetailPhotos';
import PageNotFound from './pages/PageNotFound';
import AuthRequired from './components/layout/AuthRequired';
import Login from './pages/Login';

export default function App() {
  return (
    <div className='app'>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="login" element={<Login />} />
            <Route element={<AuthRequired />}>
              <Route path="host" element={<HostLayout />}>
                <Route index element={<HostDashboard />} />
                <Route path="income" element={<HostIncome />} />
                <Route path="reviews" element={<HostReviews />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVanDetailLayout />} >
                  <Route index element={<HostVanDetailDetails/>} />
                  <Route path="pricing" element={<HostVanDetailPricing />} />
                  <Route path="photos" element={<HostVanDetailPhotos />} />
                </Route>
              </Route>
            </Route>
            <Route path="*" element={<PageNotFound />}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}
