import React, { useState, useEffect } from 'react'
import './PlayerOfMatch.css'

const PlayerOfMatch = ({ matchId }) => {
  const [playerOfMatch, setPlayerOfMatch] = useState(null)

  useEffect(() => {
    // Mock data - In real app, fetch from API
    const mockPOM = {
      name: 'Bruno Fernandes',
      team: 'home',
      rating: 8.7,
      stats: {
        goals: 1,
        assists: 1,
        keyPasses: 4,
        tackles: 3,
        distance: '11.2 km'
      }
    }
    setPlayerOfMatch(mockPOM)
  }, [matchId])

  if (!playerOfMatch) return null

  return (
    <div className="player-of-match">
      <h3>Cầu thủ xuất sắc nhất trận</h3>
      <div className="pom-card">
        <div className="pom-badge">🏆</div>
        <div className="pom-name">{playerOfMatch.name}</div>
        <div className="pom-rating">{playerOfMatch.rating}</div>
        <div className="pom-stats">
          <div className="stat">
            <span className="stat-label">Bàn thắng</span>
            <span className="stat-value">{playerOfMatch.stats.goals}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Kiến tạo</span>
            <span className="stat-value">{playerOfMatch.stats.assists}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Đường chuyền quan trọng</span>
            <span className="stat-value">{playerOfMatch.stats.keyPasses}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Tắc bóng</span>
            <span className="stat-value">{playerOfMatch.stats.tackles}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerOfMatch