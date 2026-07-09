import React from 'react'
import { Routes, Route } from 'react-router-dom'

import SeatBooking from './Components/Front-end-tasks/SeatBooking'
import TicTokTeo from './Components/Front-end-tasks/TicTokTeo'
import ResumeSender from './Components/ResumeSender'
import ResumeGenerator from './Components/resume_generator'
import Throtliing from './Components/Front-end-tasks/Throtliing'

const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/html" element={<HTMLPage />} />
    //   <Route path="/css" element={<CSSPage />} />
    //   <Route path="/animations" element={<AnimationsPage />} />
    //   <Route path="/transitions" element={<TransitionsPage />} />
    //   <Route path="/js" element={<JSPage />} />
    // </Routes>
    <>
    {/* <SeatBooking /> */}
    {/* <TicTokTeo /> */}
    {/* <Throtliing /> */}
    {/* <ResumeSender /> */}
    <ResumeGenerator />

    </>
  )
}

export default App