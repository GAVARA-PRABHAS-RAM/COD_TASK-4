import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'

// Import pages
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import CourseDetail from './pages/CourseDetail/CourseDetail'
import Dashboard from './pages/Dashboard/Dashboard'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('Gavara Prabhas Ram');

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className="app">
      {isAuthenticated && <Navbar username={username} />}
      <main className="main-content">
        <Routes>
          <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/courses" element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          } />
          <Route path="/courses/:id" element={
            <ProtectedRoute>
              <CourseDetail />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </main>
    </div>
  )
}

export default App 