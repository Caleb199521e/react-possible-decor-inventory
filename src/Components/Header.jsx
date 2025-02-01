// Header.jsx
import React from "react";
import { Notifications, CalendarToday } from "@mui/icons-material";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-top">
          <h1>Dashboard</h1>
          <input type="text" placeholder="Search" className="search-bar" />

          <div className="profile-ntn">
            <button className="notification-btn">
              <Notifications fontSize="large" />
            </button>
            <div className="profile">
              <img src="#" alt="Profile" className="profile-pic" />
              <span>Manager</span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-down">
        <p>Activity</p>
        <div className="weekly">
        <span>
          <CalendarToday fontSize="small" /> 10 Dec - 16 Dec
        </span>
        <span>Weekly</span>
        </div>
        
      </div>
    </div>
  );
}
