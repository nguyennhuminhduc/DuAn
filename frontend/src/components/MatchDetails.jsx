import React, { useState } from 'react'
import HandicapCard from './HandicapCard'
import PlayerOfMatch from './PlayerOfMatch'
import Timeline from './Timeline'
import Lineups from './Lineups'
import PlayerStats from './PlayerStats'
import './MatchDetails.css'

const MatchDetails = ({ match }) => {
  const [activeTab, setActiveTab] = useState('stats')

  const tabs = [
    { id: 'stats', name: 'Thống kê' },
    { id: 'lineups', name: 'Đội hình' },
    { id: 'timeline', name: 'Diễn biến' }
  ]

  return (
    <div className="match-details">
      <div className="match-header">
        <div className="match-teams">
          <div className="team">
            <img src={match.homeTeam.logo} alt={match.homeTeam.name} />
            <span>{match.homeTeam.name}</span>
          </div>
          <div className="score-container">
            <div className="score">{match.homeScore} - {match.awayScore}</div>
            <div className="match-status">{match.status}</div>
          </div>
          <div className="team">
            <img src={match.awayTeam.logo} alt={match.awayTeam.name} />
            <span>{match.awayTeam.name}</span>
          </div>
        </div>
        <div className="match-info">
          <span>🏟️ {match.venue}</span>
          {match.additionalTime && <span>⏱️ Additional time {match.additionalTime}'</span>}
        </div>
      </div>

      <div className="match-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === 'stats' && (
          <>
            <PlayerStats matchId={match.id} />
            <div className="two-columns">
              <HandicapCard matchId={match.id} />
              <PlayerOfMatch matchId={match.id} />
            </div>
          </>
        )}
        {activeTab === 'lineups' && <Lineups matchId={match.id} />}
        {activeTab === 'timeline' && <Timeline matchId={match.id} />}
      </div>
    </div>
  )
}

export default MatchDetails