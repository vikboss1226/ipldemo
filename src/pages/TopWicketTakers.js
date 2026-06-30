import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { topWicketTakers } from "../data/iplData";
import "./StatsPage.css";

export default function TopWicketTakers() {
  const chartData = topWicketTakers.map((p) => ({ name: p.name.split(" ").pop(), wickets: p.wickets }));

  return (
    <div className="stats-page">
      <h1 className="page-title">Top Wicket Takers</h1>
      <p className="page-subtitle">Leading wicket-takers of IPL 2026</p>

      <div className="chart-card">
        <h3>Wickets by Player</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" width={90} />
            <Tooltip />
            <Bar dataKey="wickets" fill="#3A225D" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="table-card">
        <div className="table-wrap">
          <table className="ipl-table">
            <thead>
              <tr>
                <th>Rank</th><th>Player</th><th>Team</th><th>M</th><th>Wkts</th><th>Econ</th><th>Best</th>
              </tr>
            </thead>
            <tbody>
              {topWicketTakers.map((p) => (
                <tr key={p.rank}>
                  <td>{p.rank <= 3 ? ["🥇", "🥈", "🥉"][p.rank - 1] : p.rank}</td>
                  <td className="bold">{p.name}</td>
                  <td>{p.team}</td>
                  <td>{p.matches}</td>
                  <td className="highlight">{p.wickets}</td>
                  <td>{p.econ}</td>
                  <td>{p.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
