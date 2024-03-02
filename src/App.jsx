import { useState } from 'react'
import './App.css'
import Login from './components/login'

const BASE_URL = import.meta.env.VITE_Backend_BASE_URL
function App() {

  return (
    <Login/>
  )
}

export default App
