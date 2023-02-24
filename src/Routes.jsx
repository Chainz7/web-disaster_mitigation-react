import React from 'react'
import './styles.css'
import { Navbar, Footer } from './containers'
import { Learn, News, Article } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Learn />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
      <div className="app-device">
        <lord-icon
          src="https://cdn.lordicon.com/zygphpgt.json"
          trigger="loop"
          delay="100"
          colors="primary:#121331,secondary:#66dac1,tertiary:#ffc738,quaternary:#ebe6ef"
          style={{width:"250px", height:"250px"}}>
        </lord-icon>
        <span className="device-small">This Screen Size Is Too Small</span>
      </div>
    </>
  );
}

export default App