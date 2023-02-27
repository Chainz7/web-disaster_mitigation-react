import React from 'react'
import { motion } from 'framer-motion'

import './styles.css'
import { Navbar, Footer } from './containers'
import { Learn, News, Map } from './pages'
import { Article1, Article2, Article3, Article4, Article5, Article6, Article7, Article8, Article9, Article10, Article11, Article12, Article13, Article14, Article15, Article16, Article17, Article18, Article19, Article20, Article21, Article22, Article23 } from './components/pages/Learn/Article'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Main */}
            <Route path="/kabar" element={<News />} />
            <Route path="/peta" element={<Map />} />
            <Route path="/" element={<Learn />} />
            {/* Learn Articles */}
            <Route path="/pelajari/artikel-1" element={<Article1 />} />
            <Route path="/pelajari/artikel-2" element={<Article2 />} />
            <Route path="/pelajari/artikel-3" element={<Article3 />} />
            <Route path="/pelajari/artikel-4" element={<Article4 />} />
            <Route path="/pelajari/artikel-5" element={<Article5 />} />
            <Route path="/pelajari/artikel-6" element={<Article6 />} />
            <Route path="/pelajari/artikel-7" element={<Article7 />} />
            <Route path="/pelajari/artikel-8" element={<Article8 />} />
            <Route path="/pelajari/artikel-9" element={<Article9 />} />
            <Route path="/pelajari/artikel-10" element={<Article10 />} />
            <Route path="/pelajari/artikel-11" element={<Article11 />} />
            <Route path="/pelajari/artikel-12" element={<Article12 />} />
            <Route path="/pelajari/artikel-13" element={<Article13 />} />
            <Route path="/pelajari/artikel-14" element={<Article14 />} />
            <Route path="/pelajari/artikel-15" element={<Article15 />} />
            <Route path="/pelajari/artikel-16" element={<Article16 />} />
            <Route path="/pelajari/artikel-17" element={<Article17 />} />
            <Route path="/pelajari/artikel-18" element={<Article18 />} />
            <Route path="/pelajari/artikel-19" element={<Article19 />} />
            <Route path="/pelajari/artikel-20" element={<Article20 />} />
            <Route path="/pelajari/artikel-21" element={<Article21 />} />
            <Route path="/pelajari/artikel-22" element={<Article22 />} />
            <Route path="/pelajari/artikel-23" element={<Article23 />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
      {/* Small Device */}
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