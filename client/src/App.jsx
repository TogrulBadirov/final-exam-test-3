import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import MainLayout from './layout/MainLayout';
import AddPage from './pages/AddPage';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import NoPage from './pages/NoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailPage from './pages/DetailPage';
function App() {

  return (
    <>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="add-page" element={<AddPage />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="detail-page/:id" element={<DetailPage />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
