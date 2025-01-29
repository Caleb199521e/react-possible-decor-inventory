// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../Components/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="logo">Possible Decor</h1>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard" className="active">
              🏠 Dashboard
            </Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/purchases">Purchases</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <div className="logout">
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}