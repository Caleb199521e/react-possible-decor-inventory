import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import Dashboard from './Pages/Dashboard';
import Products from './Pages/Products';
import Categories from './Pages/Categories';
import Orders from './Pages/Orders';
import Purchases from './Pages/Purchases';
import Settings from './Pages/Settings';
import ProtectedRoute from './Components/ProtectedRoute';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for login/signup */}
        <Route path="/" element={<LoginSignup />} />

        {/* Protected routes */}
        <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
        <Route path="/products" element={<ProtectedRoute element={Products} />} />
        <Route path="/categories" element={<ProtectedRoute element={Categories} />} />
        <Route path="/orders" element={<ProtectedRoute element={Orders} />} />
        <Route path="/purchases" element={<ProtectedRoute element={Purchases} />} />
        <Route path="/settings" element={<ProtectedRoute element={Settings} />} />
       
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
