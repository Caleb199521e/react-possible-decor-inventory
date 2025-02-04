import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import Dashboard from './Pages/Dashboard';
import Products from './Pages/Products'
import Categories from './Pages/Categories'

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for login/signup */}
        <Route path="/" element={<LoginSignup />} />

        {/* Route for the dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />

      </Routes>
    </Router>
  );
}

export default App;
