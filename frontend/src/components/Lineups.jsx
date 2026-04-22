import React, { useState, useEffect } from 'react'
import './Lineups.css'

const Lineups = ({ matchId }) => {
  const [lineups, setLineups] = useState({ home: [], away: [] })

  useEffect(() => {
    // Mock data - In real app, fetch from API
    const mockLineups = {
      home: [
        { name: 'David de Gea', position: 'GK', number: 1 },
        { name: 'Aaron Wan-Bissaka', position: 'RB', number: 29 },
        { name: 'Harry Maguire', position: 'CB', number: 5 },
        { name: 'Lisandro Martinez', position: 'CB', number: 6 },
        { name: 'Luke Shaw', position: 'LB', number: 23 },
        { name: 'Casemiro', position: 'CDM', number: 18 },
        { name: 'Bruno Fernandes', position: 'CAM', number: 8 },
        { name: 'Marcus Rashford', position: 'LW', number: 10 },
        { name: 'Antony', position: 'RW', number: 21 },
        { name: 'Mason Mount', position: 'CM', number: 7 },
        { name: 'Rasmus Hojlund', position: 'ST', number: 11 }
      ],
      away: [
        { name: 'Alisson Becker', position: 'GK', number: 1 },
        { name: 'Trent Alexander-Arnold', position: 'RB', number: 66 },
        { name: 'Virgil van Dijk', position: 'CB', number: 4 },
        { name: 'Ibrahima Konaté', position: 'CB', number: 5 },
        { name: 'Andrew Robertson', position: 'LB', number: 26 },
        { name: 'Dominik Szoboszlai', position: 'CM', number: 8 },
        { name: 'Alexis Mac Allister', position: 'CM', number: 10 },
        { name: 'Curtis Jones', position: 'CM', number: 17 },
        { name: 'Mohamed Salah', position: 'RW', number: 11 },
        { name: 'Darwin Núñez', position: 'ST', number: 9 },
        { name: 'Luis Díaz', position: 'LW', number: 7 }
      ]
    }
    setLineups(mockLineups)
  }, [matchId])

  return (
    <div className="lineups">
      <h3>Đội hình ra sân</h3>
      <div className="lineups-container">
        <div className="team-lineup">
          <h4>Đội nhà</h4>
          <div className="players-grid">
            {lineups.home.map((player, idx) => (
              <div key={idx} className="player-card">
                <span className="player-number">{player.number}</span>
                <div className="player-info">
                  <div className="player-name">{player.name}</div>
                  <div className="player-position">{player.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="team-lineup">
          <h4>Đội khách</h4>
          <div className="players-grid">
            {lineups.away.map((player, idx) => (
              <div key={idx} className="player-card">
                <span className="player-number">{player.number}</span>
                <div className="player-info">
                  <div className="player-name">{player.name}</div>
                  <div className="player-position">{player.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lineups