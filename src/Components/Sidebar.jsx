import React from "react";
import { Link } from "react-router-dom";
import { 
  Dashboard, 
  ShoppingCart, 
  Category, 
  ListAlt, 
  Receipt, 
  BarChart, 
  Settings, 
  ExitToApp 
} from "@mui/icons-material";
import "../Components/Sidebar.css";
import logo from "./Assets/Possible Decor Logo.png"; // Adjust the path as necessary

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Possible Decor Logo" className="logo-image" />
        <h1 className="logo">Possible Decor</h1>
      </div>
      
      <nav>
        <ul>
          <li>
            <Link to="/dashboard" className="sidebar-link">
              <Dashboard className="sidebar-icon" /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className="sidebar-link">
              <ShoppingCart className="sidebar-icon" /> <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/categories" className="sidebar-link">
              <Category className="sidebar-icon" /> <span>Categories</span>
            </Link>
          </li>
          <li>
            <Link to="/orders" className="sidebar-link">
              <ListAlt className="sidebar-icon" /> <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/purchases" className="sidebar-link">
              <Receipt className="sidebar-icon" /> <span>Purchases</span>
            </Link>
          </li>
          <li>
            <Link to="/reports" className="sidebar-link">
              <BarChart className="sidebar-icon" /> <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="sidebar-link">
              <Settings className="sidebar-icon" /> <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="logout">
        <Link to="/" className="sidebar-link">
          <ExitToApp className="sidebar-icon" /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}
