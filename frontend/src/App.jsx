import { useState } from 'react'
import HandicapCard from './components/LeftPanel/HandicapCard'
import MomentumChart from './components/LeftPanel/MomentumChart'
import PlayerOfMatch from './components/LeftPanel/PlayerOfMatch'
import Timeline from './components/LeftPanel/Timeline'
import PlayerStats from './components/RightPanel/PlayerStats'
import Lineups from './components/RightPanel/Lineups'
import TopBar from "./components/TopBar";

function App() {
  const [activeTab, setActiveTab] = useState("stats");

  // 🔥 DATA từ backend
  const [match, setMatch] = useState(null);
  const [players, setPlayers] = useState([]);

  // ===== LOAD MATCH =====
  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const res = await fetch(`${API_URL}/api/matches`);
        const data = await res.json();

        // lấy trận đầu tiên
        setMatch(data.response?.[0] || null);
      } catch (err) {
        console.error("Lỗi load match:", err);
      }
    };

    fetchMatch();
  }, []);

  // ===== LOAD PLAYER =====
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await fetch(`${API_URL}/api/players?name=messi`);
        const data = await res.json();

        setPlayers(data.response || []);
      } catch (err) {
        console.error("Lỗi load player:", err);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <>
      <TopBar match={match} />

      <div className="layout">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <HandicapCard match={match} />
          <MomentumChart match={match} />
          <PlayerOfMatch players={players} />
          <Timeline match={match} />
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <div className="main-tabs">
            <div
              className={`main-tab ${activeTab === "lineups" ? "active" : ""}`}
              onClick={() => setActiveTab("lineups")}
            >
              LINEUPS
            </div>

            <div
              className={`main-tab ${activeTab === "stats" ? "active" : ""}`}
              onClick={() => setActiveTab("stats")}
            >
              PLAYER STATISTICS
            </div>
          </div>

          <div
            className={`tab-pane ${activeTab === "lineups" ? "active" : ""}`}
          >
            <Lineups match={match} />
          </div>

          <div
            className={`tab-pane ${activeTab === "stats" ? "active" : ""}`}
          >
            <PlayerStats players={players} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;