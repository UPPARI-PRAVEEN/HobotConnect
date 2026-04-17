import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/pages/Home'
import HTMLPage from './Components/pages/HTMLPage'
import CSSPage from './Components/pages/CSSPage'
import AnimationsPage from './Components/pages/AnimationsPage'
import TransitionsPage from './Components/pages/TransitionsPage'
import JSPage from './Components/pages/JSPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/html" element={<HTMLPage />} />
      <Route path="/css" element={<CSSPage />} />
      <Route path="/animations" element={<AnimationsPage />} />
      <Route path="/transitions" element={<TransitionsPage />} />
      <Route path="/js" element={<JSPage />} />
    </Routes>
  )
}

export default App