// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Statistics from './components/Satistical';
import AIBot from './components/AIBot';
import Navbar from './components/navbar';
import './index.css';

function App() {
  // State to track if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Example function to handle login (replace with real authentication logic)
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Example function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen text-white">
        {/* Navbar component with props for authentication status */}
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/ai-bot" element={<AIBot />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
