import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Matches from "./pages/Matches";
import TopScorers from "./pages/TopScorers";
import TopWicketTakers from "./pages/TopWicketTakers";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/top-scorers" element={<TopScorers />} />
            <Route path="/top-wickets" element={<TopWicketTakers />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
