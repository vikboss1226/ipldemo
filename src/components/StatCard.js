import React from "react";
import "./StatCard.css";

export default function StatCard({ icon, label, value, sub, accent }) {
  return (
    <div className="stat-card" style={{ "--accent": accent || "#ff9933" }}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-body">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
        {sub && <div className="stat-sub">{sub}</div>}
      </div>
    </div>
  );
}
