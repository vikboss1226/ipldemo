import React, { useState } from "react";
import { matches, teams } from "../data/iplData";
import "./Matches.css";

const teamByCode = Object.fromEntries(teams.map((t) => [t.code, t]));

export default function Matches() {
  const [filter, setFilter] = useState("all");

  const filtered = matches.filter((m) => (filter === "all" ? true : m.status === filter));

  return (
    <div className="matches-page">
      <h1 className="page-title">Matches</h1>
      <p className="page-subtitle">IPL 2026 schedule and results</p>

      <div className="filter-bar">
        {["all", "completed", "upcoming"].map((f) => (
          <button
            key={f}
            className={"filter-btn" + (filter === f ? " active" : "")}
            onClick={() => setFilter(f)}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="match-grid">
        {filtered.map((m) => {
          const t1 = teamByCode[m.team1];
          const t2 = teamByCode[m.team2];
          return (
            <div className="match-card" key={m.id}>
              <div className="match-status">
                <span className={"badge " + m.status}>{m.status === "completed" ? "Completed" : "Upcoming"}</span>
                <span className="match-date">{m.date}</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <span className="team-circle" style={{ background: t1.color }}>{t1.code}</span>
                  <span className="team-name">{t1.name}</span>
                </div>
                <span className="vs">vs</span>
                <div className="team">
                  <span className="team-circle" style={{ background: t2.color }}>{t2.code}</span>
                  <span className="team-name">{t2.name}</span>
                </div>
              </div>
              <div className="match-venue">📍 {m.venue}</div>
              {m.result && <div className="match-result">{m.result}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
