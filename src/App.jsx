import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './App.css'

// Import pages
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import CourseDetail from './pages/CourseDetail/CourseDetail'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App 