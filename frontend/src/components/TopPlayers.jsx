import React from 'react'
import './TopPlayers.css'

const TopPlayers = ({ players }) => {
  const defaultPlayers = [
    { 
      rank: 1,
      name: 'Lamine Yamal', 
      team: 'FC Barcelona', 
      rating: 8.5, 
      image: 'https://media.api-sports.io/football/players/placeholder.png',
      competition: 'UEFA Champions League'
    },
    { 
      rank: 2,
      name: 'Kylian Mbappé', 
      team: 'Real Madrid', 
      rating: 8.8, 
      image: 'https://media.api-sports.io/football/players/placeholder.png',
      competition: 'UEFA Champions League'
    },
    { 
      rank: 3,
      name: 'Harry Kane', 
      team: 'FC Bayern München', 
      rating: 8.7, 
      image: 'https://media.api-sports.io/football/players/placeholder.png',
      competition: 'UEFA Champions League'
    },
    { 
      rank: 4,
      name: 'Erling Haaland', 
      team: 'Manchester City', 
      rating: 8.6, 
      image: 'https://media.api-sports.io/football/players/placeholder.png',
      competition: 'UEFA Champions League'
    },
    { 
      rank: 5,
      name: 'Jude Bellingham', 
      team: 'Real Madrid', 
      rating: 8.4, 
      image: 'https://media.api-sports.io/football/players/placeholder.png',
      competition: 'UEFA Champions League'
    }
  ]

  const displayPlayers = players && players.length > 0 ? players : defaultPlayers

  return (
    <div className="top-players">
      <div className="top-players-header">
        <h3>Player of the Season race</h3>
        <span className="competition">UEFA Champions League</span>
      </div>
      <div className="players-list">
        {displayPlayers.map((player) => (
          <div key={player.rank} className="player-card">
            <div className="player-rank">{player.rank}</div>
            <div className="player-avatar">
              <img src={player.image} alt={player.name} />
            </div>
            <div className="player-info">
              <div className="player-name">{player.name}</div>
              <div className="player-team">{player.team}</div>
            </div>
            <div className="player-rating">{player.rating}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopPlayers