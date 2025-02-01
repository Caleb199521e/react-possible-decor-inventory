// Header.jsx
import React from "react";
import { Notifications, CalendarToday } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <div className="header">
        
          <h1>Dashboard</h1>
          <input type="text" placeholder="Search" className="search-bar" />

          <div className="profile-ntn">
            <button className="notification-btn">
            <Notifications sx={{ color: "gray", fontSize: 25 }} />
            </button>
            <div className="profile">
            <Avatar
              alt="Pamela"
              src="https://via.placeholder.com/150"
              sx={{ width: 40, height: 40 }}
            />
            <div className="profile-text">
                <p>Pamela PB</p>
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
