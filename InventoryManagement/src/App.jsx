import React, { useState } from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Routes/Home'
import Cart from './Routes/Cart'
import Profile from './Routes/Profile'
import Distributors from './Routes/Distributors'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home />} />
          <Route path='cart' element={<Cart/>}/>
          <Route path="distributors" element={<Distributors />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App
