import React from 'react'
import './MatchCard.css'

const MatchCard = ({ match }) => {
  const getStatusBadge = (status) => {
    if (status === 'LIVE') return <span className="status-badge live">🔴 LIVE</span>
    if (status === 'FT') return <span className="status-badge finished">✅ FT</span>
    if (status === 'NS') return <span className="status-badge upcoming">⏰ NS</span>
    return <span className="status-badge">{status || 'N/A'}</span>
  }

  const status = match.fixture?.status?.short || 'NS'
  const elapsed = match.fixture?.status?.elapsed

  return (
    <div className="match-card">
      <div className="match-league">
        {match.league?.logo && (
          <img src={match.league.logo} alt={match.league?.name} className="league-logo" />
        )}
        <span>{match.league?.name || 'Unknown League'}</span>
        <span className="league-country">{match.league?.country || ''}</span>
      </div>
      <div className="match-teams">
        <div className="team home">
          {match.teams?.home?.logo && (
            <img src={match.teams.home.logo} alt={match.teams.home.name} className="team-logo" />
          )}
          <span className="team-name">{match.teams?.home?.name || 'Home Team'}</span>
          <span className="team-score">{match.goals?.home ?? 0}</span>
        </div>
        <div className="match-vs">VS</div>
        <div className="team away">
          <span className="team-score">{match.goals?.away ?? 0}</span>
          <span className="team-name">{match.teams?.away?.name || 'Away Team'}</span>
          {match.teams?.away?.logo && (
            <img src={match.teams.away.logo} alt={match.teams.away.name} className="team-logo" />
          )}
        </div>
      </div>
      <div className="match-info">
        {getStatusBadge(status)}
        {elapsed && <span className="match-time">{elapsed}'</span>}
        {match.fixture?.venue?.name && (
          <span className="match-venue">📍 {match.fixture.venue.name}</span>
        )}
      </div>
    </div>
  )
}

export default MatchCard