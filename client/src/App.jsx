import AdminDashboard from './pages/AdminDashboard'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a/dashboard' element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
