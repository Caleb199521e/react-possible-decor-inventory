// Card.jsx
import React from "react";
import "./Card.css";
export default function Card({ title, value, icon, change, color }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="title-icon">
          <h4 className="card-title">{title}</h4>
          <div className="card-icon">{icon}</div>
        </div>
        <p className="card-value">{value}</p> 
        <p className={`card-change ${color}`}>{change}</p>
      </div>
      
    </div>
  );
}
