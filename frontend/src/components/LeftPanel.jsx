import React from 'react'
import './LeftPanel.css'

const LeftPanel = ({ matches, selectedMatch, onSelectMatch }) => {
  return (
    <div className="left-panel">
      <div className="panel-header">
        <h3>⚽ Trận đấu hôm nay</h3>
      </div>
      <div className="matches-list">
        {matches.map((match) => (
          <div
            key={match.id}
            className={`match-item ${selectedMatch?.id === match.id ? 'selected' : ''}`}
            onClick={() => onSelectMatch(match)}
          >
            <div className="match-teams">
              <div className="team-info">
                <img src={match.homeTeam.logo} alt={match.homeTeam.name} />
                <span>{match.homeTeam.name}</span>
              </div>
              <div className="match-score">
                {match.homeScore} - {match.awayScore}
              </div>
              <div className="team-info">
                <span>{match.awayTeam.name}</span>
                <img src={match.awayTeam.logo} alt={match.awayTeam.name} />
              </div>
            </div>
            <div className="match-status">
              <span className={`status-badge ${match.status === 'Live' ? 'live' : ''}`}>
                {match.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeftPanel