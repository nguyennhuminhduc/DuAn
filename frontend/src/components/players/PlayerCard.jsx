import React from 'react'
import './PlayerCard.css'

const PlayerCard = ({ player, index }) => {
  const stats = player.statistics?.[0] || {}
  const team = stats.team || {}
  const league = stats.league || {}

  return (
    <div className="player-card">
      <div className="player-rank">#{index + 1}</div>
      <div className="player-avatar">
        <img 
          src={player.player?.photo || 'https://via.placeholder.com/80?text=No+Image'} 
          alt={player.player?.name}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/80?text=No+Image'
          }}
        />
      </div>
      <div className="player-info">
        <h3 className="player-name">{player.player?.name || 'Unknown'}</h3>
        <div className="player-details">
          <span className="player-team">
            ⚽ {team.name || 'N/A'}
          </span>
          <span className="player-league">
            🏆 {league.name || 'N/A'}
          </span>
        </div>
        <div className="player-stats">
          <div className="stat">
            <span className="stat-label">Tuổi</span>
            <span className="stat-value">{player.player?.age || 'N/A'}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Vị trí</span>
            <span className="stat-value">{stats.games?.position || 'N/A'}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Số áo</span>
            <span className="stat-value">{stats.games?.number || 'N/A'}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Bàn thắng</span>
            <span className="stat-value">{stats.goals?.total || 0}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Kiến tạo</span>
            <span className="stat-value">{stats.goals?.assists || 0}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Trận</span>
            <span className="stat-value">{stats.games?.appearences || 0}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Rating</span>
            <span className="stat-value rating">{stats.games?.rating || 'N/A'}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Thẻ vàng</span>
            <span className="stat-value">{stats.cards?.yellow || 0}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard