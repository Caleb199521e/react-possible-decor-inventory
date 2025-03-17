import React from "react";
import { useLocation } from "react-router-dom";
import { Notifications } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import { useUser } from './context/UserContext';

export default function Header() {
  const location = useLocation();
  const { user } = useUser();

  // Map routes to page names
  const pageNames = {
    "/dashboard": "Dashboard",
    "/products": "Products",
    "/categories": "Categories",
    "/orders": "Orders",
    "/purchases": "Purchases",
    "/reports": "Reports",
    "/settings": "Settings",
  };

  // Get the current page name from the route
  const pageName = pageNames[location.pathname] || "Page";

  return (
    <div>
      <div className="header">
        <h1>{pageName}</h1>
        <input type="text" placeholder="Search" className="search-bar" />

        <div className="profile-ntn">
          <button className="notification-btn">
            <Notifications sx={{ color: "gray", fontSize: 25 }} />
          </button>
          <div className="profile">
            <Avatar
              alt={user?.name || "User"}
              src={user?.avatar || "https://via.placeholder.com/150"}
              sx={{ width: 40, height: 40 }}
            />
            <div className="profile-text">
              <p>{user?.name || "User"}</p>
              <span>{user?.role || "Role"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
