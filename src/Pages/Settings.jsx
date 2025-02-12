import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import "./Settings.css";

export default function Settings() {
  return (
    <div className="settings-page">
      <Sidebar />
      <div className="settings-container">
        <Header />
        <div className="settings-content">
          <h2>Settings</h2>

          <div className="settings-section">
            <h3>Profile Settings</h3>
            <div className="settings-grid">
              <div className="input-group">
                <label>User Name</label>
                <input type="text" value="Pamela PB" readOnly />
              </div>
              <div className="input-group">
                <label>User ID</label>
                <input type="text" value="#USER002" readOnly />
              </div>
              <div className="input-group">
                <label>Contact</label>
                <input type="text" value="+233 54 255 0157" readOnly />
              </div>
              <div className="input-group">
                <label>E-Mail</label>
                <input type="email" value="pamela.pearl20@gmail.com" readOnly />
              </div>
            </div>
            <button className="save-btn">Save Changes</button>
          </div>

          <div className="settings-section">
            <h3>Change Password</h3>
            <div className="settings-grid">
              <div className="input-group">
                <label>User ID</label>
                <input type="text" value="#USER002" readOnly />
              </div>
              <div className="input-group">
                <label>Old Password</label>
                <input type="password" />
              </div>
              <div className="input-group">
                <label>New Password</label>
                <input type="password" />
              </div>
              <div className="input-group">
                <label>Confirm Password</label>
                <input type="password" />
              </div>
            </div>
            <button className="change-password-btn">Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}
