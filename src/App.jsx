

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './compontes/Welcome'
import Login from './compontes/Login'
import Register from './compontes/Register'
import EmployeeDashboard from './compontes/EmployeeDashboard'

function App() {
  

  return (
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/allEmp" element={<EmployeeDashboard/>}/>
      </Routes>
  )
}

export default App
