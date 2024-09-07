import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/history' element={<History />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
