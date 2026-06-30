// Static IPL 2026 demo data
export const teams = [
  { code: "MI", name: "Mumbai Indians", color: "#004BA0", played: 14, won: 9, lost: 5, points: 18, nrr: 0.62 },
  { code: "CSK", name: "Chennai Super Kings", color: "#F9CD05", played: 14, won: 8, lost: 6, points: 16, nrr: 0.41 },
  { code: "RCB", name: "Royal Challengers Bengaluru", color: "#EC1C24", played: 14, won: 8, lost: 6, points: 16, nrr: 0.25 },
  { code: "GT", name: "Gujarat Titans", color: "#1B2133", played: 14, won: 8, lost: 6, points: 16, nrr: 0.18 },
  { code: "KKR", name: "Kolkata Knight Riders", color: "#3A225D", played: 14, won: 7, lost: 7, points: 14, nrr: 0.05 },
  { code: "SRH", name: "Sunrisers Hyderabad", color: "#FF822A", played: 14, won: 7, lost: 7, points: 14, nrr: -0.10 },
  { code: "DC", name: "Delhi Capitals", color: "#17479E", played: 14, won: 6, lost: 8, points: 12, nrr: -0.22 },
  { code: "RR", name: "Rajasthan Royals", color: "#254AA5", played: 14, won: 6, lost: 8, points: 12, nrr: -0.30 },
  { code: "PBKS", name: "Punjab Kings", color: "#ED1B24", played: 14, won: 5, lost: 9, points: 10, nrr: -0.45 },
  { code: "LSG", name: "Lucknow Super Giants", color: "#0057A1", played: 14, won: 4, lost: 10, points: 8, nrr: -0.58 },
];

export const matches = [
  { id: 1, date: "2026-03-22", venue: "Wankhede Stadium, Mumbai", team1: "MI", team2: "CSK", result: "MI won by 6 wickets", status: "completed" },
  { id: 2, date: "2026-03-23", venue: "M. Chinnaswamy Stadium, Bengaluru", team1: "RCB", team2: "GT", result: "RCB won by 18 runs", status: "completed" },
  { id: 3, date: "2026-03-24", venue: "Eden Gardens, Kolkata", team1: "KKR", team2: "SRH", result: "SRH won by 4 wickets", status: "completed" },
  { id: 4, date: "2026-03-25", venue: "Arun Jaitley Stadium, Delhi", team1: "DC", team2: "RR", result: "DC won by 22 runs", status: "completed" },
  { id: 5, date: "2026-03-26", venue: "IS Bindra Stadium, Mohali", team1: "PBKS", team2: "LSG", result: "PBKS won by 8 wickets", status: "completed" },
  { id: 6, date: "2026-03-27", venue: "MA Chidambaram Stadium, Chennai", team1: "CSK", team2: "RCB", result: "CSK won by 3 wickets", status: "completed" },
  { id: 7, date: "2026-03-28", venue: "Narendra Modi Stadium, Ahmedabad", team1: "GT", team2: "MI", result: "GT won by 31 runs", status: "completed" },
  { id: 8, date: "2026-03-29", venue: "Rajiv Gandhi Stadium, Hyderabad", team1: "SRH", team2: "DC", result: "SRH won by 12 runs", status: "completed" },
  { id: 9, date: "2026-07-02", venue: "Sawai Mansingh Stadium, Jaipur", team1: "RR", team2: "PBKS", result: "", status: "upcoming" },
  { id: 10, date: "2026-07-03", venue: "Ekana Stadium, Lucknow", team1: "LSG", team2: "KKR", result: "", status: "upcoming" },
  { id: 11, date: "2026-07-04", venue: "Wankhede Stadium, Mumbai", team1: "MI", team2: "RCB", result: "", status: "upcoming" },
  { id: 12, date: "2026-07-05", venue: "MA Chidambaram Stadium, Chennai", team1: "CSK", team2: "GT", result: "", status: "upcoming" },
];

export const topScorers = [
  { rank: 1, name: "Virat Kohli", team: "RCB", matches: 14, runs: 712, avg: 59.3, sr: 152.1, hs: "101*" },
  { rank: 2, name: "Shubman Gill", team: "GT", matches: 14, runs: 678, avg: 56.5, sr: 148.7, hs: "98" },
  { rank: 3, name: "Rohit Sharma", team: "MI", matches: 14, runs: 642, avg: 49.4, sr: 145.3, hs: "105*" },
  { rank: 4, name: "Yashasvi Jaiswal", team: "RR", matches: 14, runs: 615, avg: 47.3, sr: 158.9, hs: "92" },
  { rank: 5, name: "Travis Head", team: "SRH", matches: 13, runs: 588, avg: 49.0, sr: 172.4, hs: "89" },
  { rank: 6, name: "Ruturaj Gaikwad", team: "CSK", matches: 14, runs: 561, avg: 46.8, sr: 141.2, hs: "94*" },
  { rank: 7, name: "Faf du Plessis", team: "DC", matches: 13, runs: 524, avg: 43.7, sr: 139.6, hs: "88" },
  { rank: 8, name: "Nicholas Pooran", team: "LSG", matches: 14, runs: 498, avg: 41.5, sr: 168.3, hs: "75" },
];

export const topWicketTakers = [
  { rank: 1, name: "Jasprit Bumrah", team: "MI", matches: 14, wickets: 26, econ: 6.8, best: "5/14" },
  { rank: 2, name: "Mohammed Shami", team: "GT", matches: 14, wickets: 24, econ: 7.5, best: "4/22" },
  { rank: 3, name: "Rashid Khan", team: "GT", matches: 14, wickets: 23, econ: 6.2, best: "4/18" },
  { rank: 4, name: "Yuzvendra Chahal", team: "RR", matches: 14, wickets: 22, econ: 7.1, best: "5/30" },
  { rank: 5, name: "Mustafizur Rahman", team: "CSK", matches: 13, wickets: 20, econ: 7.9, best: "3/19" },
  { rank: 6, name: "Arshdeep Singh", team: "PBKS", matches: 14, wickets: 19, econ: 8.2, best: "4/29" },
  { rank: 7, name: "Kagiso Rabada", team: "DC", matches: 12, wickets: 18, econ: 8.0, best: "3/24" },
  { rank: 8, name: "Pat Cummins", team: "SRH", matches: 13, wickets: 17, econ: 8.6, best: "3/27" },
];

export const teamRunsChart = teams.map(t => ({ name: t.code, points: t.points, nrr: t.nrr }));
