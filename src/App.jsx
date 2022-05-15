import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ToolBar from './components/ToolBar'
import ChartPage from './pages/ChartPage'
import GridPage from './pages/GridPage'

function App() {

  return (
      <>
      <Router>
        <ToolBar />
        <Routes>
          <Route exact path="/" element={<ChartPage />} />
          <Route path="/chart" element={<ChartPage  />} />
          <Route path="/grid" element={<GridPage  />} />
        </Routes>
      </Router>
      </>
  )
}

export default App
