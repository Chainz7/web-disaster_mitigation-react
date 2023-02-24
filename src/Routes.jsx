import React from 'react'
import './styles.css'
import { Navbar, Footer } from './containers'
import { Learn, News, Article } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/login" element={<Learn />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App