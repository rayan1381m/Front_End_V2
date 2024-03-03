import { useState } from 'react'
import './App.css'
import Login from './components/login'
import SignupForm from './components/signup'
import SideBarAdmin from './components/Sidebar-admin'
//import SideBarUser from './components/Sidebar-user'
import Admin from './Admin/Admin-panel'

const BASE_URL = import.meta.env.VITE_Backend_BASE_URL
function App() {

  return (
    <Admin/>
  )
}

export default App
