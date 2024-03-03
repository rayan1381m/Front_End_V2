import { useState } from 'react'
import './App.css'
import Login from './components/login'
import SignupForm from './components/signup'
import SideBar from './components/Sidebar'

const BASE_URL = import.meta.env.VITE_Backend_BASE_URL
function App() {

  return (
    <SideBar/>
  )
}

export default App
