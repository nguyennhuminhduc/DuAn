import { useState } from 'react'
import HandicapCard from './components/LeftPanel/HandicapCard'
import MomentumChart from './components/LeftPanel/MomentumChart'
import PlayerOfMatch from './components/LeftPanel/PlayerOfMatch'
import Timeline from './components/LeftPanel/Timeline'
import PlayerStats from './components/RightPanel/PlayerStats'
import Lineups from './components/RightPanel/Lineups'
import TopBar from "./components/TopBar";
function App() {
  const [activeTab, setActiveTab] = useState('stats')

  return (
    <>
      <TopBar />
      <div className="layout">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <HandicapCard />
          <MomentumChart />
          <PlayerOfMatch />
          <Timeline />
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <div className="main-tabs">
            <div 
              className={`main-tab ${activeTab === 'lineups' ? 'active' : ''}`}
              onClick={() => setActiveTab('lineups')}
            >
              LINEUPS
            </div>
            <div 
              className={`main-tab ${activeTab === 'stats' ? 'active' : ''}`}
              onClick={() => setActiveTab('stats')}
            >
              PLAYER STATISTICS
            </div>
          </div>

          <div className={`tab-pane ${activeTab === 'lineups' ? 'active' : ''}`} id="pane-lineups">
            <Lineups />
          </div>

          <div className={`tab-pane ${activeTab === 'stats' ? 'active' : ''}`} id="pane-stats">
            <PlayerStats />
          </div>
        </div>
      </div>
    </>
  )
}

export default App