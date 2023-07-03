import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdvocatePage from './pages/AdvocatePage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage/>} path=""/>
        <Route element={<AdvocatePage/>} path="/advocate/:username"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
