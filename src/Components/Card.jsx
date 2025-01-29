// Card.jsx
import React from "react";

export default function Card({ title, value, icon, change, color }) {
  return (
    <div className="card">
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <p className="card-value">{value}</p>
        <p className={`card-change ${color}`}>{change}</p>
      </div>
      <div className="card-icon">{icon}</div>
    </div>
  );
}
