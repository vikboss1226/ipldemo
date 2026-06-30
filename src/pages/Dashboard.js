import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LineChart, Line,
} from "recharts";
import StatCard from "../components/StatCard";
import { teams, matches, topScorers, teamRunsChart } from "../data/iplData";
import "./Dashboard.css";

const COLORS = ["#004BA0", "#F9CD05", "#EC1C24", "#1B2133", "#3A225D", "#FF822A", "#17479E", "#254AA5", "#ED1B24", "#0057A1"];

export default function Dashboard() {
  const totalMatches = matches.length;
  const completed = matches.filter((m) => m.status === "completed").length;
  const upcoming = totalMatches - completed;
  const topTeam = [...teams].sort((a, b) => b.points - a.points)[0];

  const winsData = teams.map((t) => ({ name: t.code, wins: t.won }));

  return (
    <div className="dashboard">
      <h1 className="page-title">IPL 2026 Dashboard</h1>
      <p className="page-subtitle">Season overview, points table trends and squad performance</p>

      <div className="stat-grid">
        <StatCard icon="🏆" label="League Leader" value={topTeam.code} sub={topTeam.name} accent="#ffd700" />
        <StatCard icon="🏟️" label="Total Matches" value={totalMatches} sub={`${completed} completed`} accent="#ff9933" />
        <StatCard icon="📅" label="Upcoming Matches" value={upcoming} sub="Stay tuned" accent="#3A225D" />
        <StatCard icon="🔥" label="Top Run Scorer" value={topScorers[0].name} sub={`${topScorers[0].runs} runs`} accent="#EC1C24" />
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h3>Points Table — Points by Team</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={teamRunsChart}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="points" fill="#ff9933" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Wins Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={winsData} dataKey="wins" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {winsData.map((entry, idx) => (
                  <Cell key={entry.name} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card wide">
          <h3>Net Run Rate by Team</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={teamRunsChart}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="nrr" stroke="#3A225D" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="points-table-card">
        <h3>Points Table</h3>
        <div className="table-wrap">
          <table className="ipl-table">
            <thead>
              <tr>
                <th>#</th><th>Team</th><th>P</th><th>W</th><th>L</th><th>Pts</th><th>NRR</th>
              </tr>
            </thead>
            <tbody>
              {[...teams]
                .sort((a, b) => b.points - a.points || b.nrr - a.nrr)
                .map((t, idx) => (
                  <tr key={t.code}>
                    <td>{idx + 1}</td>
                    <td>
                      <span className="team-dot" style={{ background: t.color }} />
                      {t.name} ({t.code})
                    </td>
                    <td>{t.played}</td>
                    <td>{t.won}</td>
                    <td>{t.lost}</td>
                    <td className="bold">{t.points}</td>
                    <td className={t.nrr >= 0 ? "pos" : "neg"}>{t.nrr.toFixed(2)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
