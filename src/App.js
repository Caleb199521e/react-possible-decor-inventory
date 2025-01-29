import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for login/signup */}
        <Route path="/" element={<LoginSignup />} />

        {/* Route for the dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
