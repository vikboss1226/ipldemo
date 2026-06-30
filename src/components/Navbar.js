import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Dashboard", end: true },
  { to: "/matches", label: "Matches" },
  { to: "/top-scorers", label: "Top Scorers" },
  { to: "/top-wickets", label: "Top Wicket Takers" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">🏏</span>
        <span>IPL 2026</span>
      </div>
      <div className="navbar-links">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
