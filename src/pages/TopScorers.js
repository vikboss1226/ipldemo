import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { topScorers } from "../data/iplData";
import "./StatsPage.css";

export default function TopScorers() {
  const chartData = topScorers.map((p) => ({ name: p.name.split(" ").pop(), runs: p.runs }));

  return (
    <div className="stats-page">
      <h1 className="page-title">Top Scorers</h1>
      <p className="page-subtitle">Leading run-getters of IPL 2026</p>

      <div className="chart-card">
        <h3>Runs by Player</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" width={90} />
            <Tooltip />
            <Bar dataKey="runs" fill="#EC1C24" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="table-card">
        <div className="table-wrap">
          <table className="ipl-table">
            <thead>
              <tr>
                <th>Rank</th><th>Player</th><th>Team</th><th>M</th><th>Runs</th><th>Avg</th><th>SR</th><th>HS</th>
              </tr>
            </thead>
            <tbody>
              {topScorers.map((p) => (
                <tr key={p.rank}>
                  <td>{p.rank <= 3 ? ["🥇", "🥈", "🥉"][p.rank - 1] : p.rank}</td>
                  <td className="bold">{p.name}</td>
                  <td>{p.team}</td>
                  <td>{p.matches}</td>
                  <td className="highlight">{p.runs}</td>
                  <td>{p.avg}</td>
                  <td>{p.sr}</td>
                  <td>{p.hs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
