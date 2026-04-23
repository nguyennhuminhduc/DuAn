import React from 'react'
import PlayerCard from './PlayerCard'
import './PlayerList.css'

const PlayerList = ({ players, loading, searchPerformed }) => {
  if (!searchPerformed) {
    return (
      <div className="player-list-empty">
        <div className="empty-icon">🔍</div>
        <h3>Tìm kiếm cầu thủ</h3>
        <p>Nhập tên cầu thủ vào ô tìm kiếm bên trên</p>
        <small>Ví dụ: Messi, Ronaldo, Mbappé, Salah, Haaland...</small>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="player-list-empty">
        <div className="loader"></div>
        <p>Đang tìm kiếm...</p>
      </div>
    )
  }

  if (players.length === 0) {
    return (
      <div className="player-list-empty">
        <div className="empty-icon">😔</div>
        <h3>Không tìm thấy cầu thủ</h3>
        <p>Không có kết quả nào cho tìm kiếm của bạn</p>
        <small>Thử tìm kiếm với tên khác hoặc kiểm tra chính tả</small>
      </div>
    )
  }

  return (
    <div className="player-list">
      <div className="player-list-header">
        <h2>📋 Kết quả tìm kiếm</h2>
        <span className="result-count">Tìm thấy {players.length} cầu thủ</span>
      </div>
      <div className="player-list-grid">
        {players.map((player, index) => (
          <PlayerCard key={player.player?.id || index} player={player} index={index} />
        ))}
      </div>
    </div>
  )
}

export default PlayerList