import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import Dashboard from './Pages/Dashboard';
import Products from './Pages/Products'
import Categories from './Pages/Categories'
import Orders from './Pages/Orders';
import Purchases from './Pages/Purchases';
import Settings from './Pages/Settings';

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
        <Route path="/orders" element={<Orders />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </Router>
  );
}

export default App;
