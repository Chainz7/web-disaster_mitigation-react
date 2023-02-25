import React from 'react'
import { motion } from 'framer-motion'

import './styles.css'
import { Navbar, Footer } from './containers'
import { Learn, News, Map, Article } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Learn />} />
            <Route path="/kabar" element={<News />} />
            <Route path="/peta" element={<Map />} />
            <Route path="/artikel" element={<Article />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 1, ease: 'easeInOut' }}>
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
      </motion.div>
    </>
  );
}

export default App