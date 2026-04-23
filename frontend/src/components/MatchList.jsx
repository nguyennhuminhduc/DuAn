import React, { useState, useEffect } from 'react'
import './MatchList.css'

const MatchList = ({ matches, onSelectMatch }) => {
  const [activeTab, setActiveTab] = useState('live')
  const [groupedMatches, setGroupedMatches] = useState({})

  useEffect(() => {
    groupMatchesByLeague()
  }, [matches, activeTab])

  const groupMatchesByLeague = () => {
    const filtered = matches.filter(match => {
      if (activeTab === 'live') return match.status === 'LIVE' || match.status === '1H' || match.status === '2H'
      if (activeTab === 'finished') return match.status === 'FT'
      if (activeTab === 'upcoming') return match.status === 'NS'
      return true
    })

    const grouped = filtered.reduce((acc, match) => {
      const leagueName = match.league?.name || 'Other'
      if (!acc[leagueName]) {
        acc[leagueName] = {
          country: match.league?.country || 'Unknown',
          matches: []
        }
      }
      acc[leagueName].matches.push(match)
      return acc
    }, {})

    setGroupedMatches(grouped)
  }

  const getStatusText = (status, elapsed) => {
    if (status === 'LIVE') return `${elapsed || 0}'`
    if (status === 'FT') return 'FT'
    if (status === 'NS') return 'NS'
    return status
  }

  return (
    <div className="match-list">
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'live' ? 'active' : ''}`}
          onClick={() => setActiveTab('live')}
        >
          Live ({matches.filter(m => m.status === 'LIVE' || m.status === '1H' || m.status === '2H').length})
        </button>
        <button 
          className={`tab ${activeTab === 'finished' ? 'active' : ''}`}
          onClick={() => setActiveTab('finished')}
        >
          Finished
        </button>
        <button 
          className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
      </div>

      <div className="matches-by-league">
        {Object.entries(groupedMatches).map(([leagueName, data]) => (
          <div key={leagueName} className="league-section">
            <div className="league-header">
              <h3>{leagueName}</h3>
              <span className="league-country">{data.country}</span>
            </div>
            <div className="league-matches">
              {data.matches.map(match => (
                <div 
                  key={match.id} 
                  className="match-item"
                  onClick={() => onSelectMatch(match)}
                >
                  <div className="match-time">
                    {getStatusText(match.status, match.elapsed)}
                  </div>
                  <div className="match-teams">
                    <div className="team home">
                      <span className="team-name">{match.homeTeam.name}</span>
                      <span className="team-score">{match.homeScore}</span>
                    </div>
                    <div className="team away">
                      <span className="team-score">{match.awayScore}</span>
                      <span className="team-name">{match.awayTeam.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MatchList