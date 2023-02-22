import React from 'react'

import './styles.css'
import { Navbar, Footer } from './containers'
import { Learn, News, Article } from './pages'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Learn />
      <News />
      <Article />
      <Footer />
    </div>
  )
}

export default App