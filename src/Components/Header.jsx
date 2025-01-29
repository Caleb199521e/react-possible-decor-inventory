// Header.jsx
import React from "react";

export default function Header() {
  return (
    <div className="header">
      <input
        type="text"
        placeholder="Search"
        className="search-bar"
      />
      <div className="header-right">
        <span>📅 10 Dec - 16 Dec</span>
        <button className="notification-btn">🔔</button>
        <div className="profile">
          <img
            src="/profile-pic.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <span>Manager</span>
        </div>
      </div>
    </div>
  );
}
