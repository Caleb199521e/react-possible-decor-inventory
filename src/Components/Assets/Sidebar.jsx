// Sidebar.jsx
import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="logo">Possible Decor</h1>
      <nav>
        <ul>
          <li>
            <a href="#" className="active">🏠 Dashboard</a>
          </li>
          <li>
            <a href="#">📦 Products</a>
          </li>
          <li>
            <a href="#">📁 Categories</a>
          </li>
          <li>
            <a href="#">🛒 Orders</a>
          </li>
          <li>
            <a href="#">📝 Purchases</a>
          </li>
          <li>
            <a href="#">📊 Reports</a>
          </li>
          <li>
            <a href="#">⚙️ Settings</a>
          </li>
        </ul>
      </nav>
      <div className="logout">
        <a href="#">🔓 Logout</a>
      </div>
    </div>
  );
}
