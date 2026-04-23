import React from 'react'
import MatchCard from './MatchCard'
import './MatchList.css'

const MatchList = ({ matches, loading }) => {
  if (loading) return null

  if (!matches || matches.length === 0) {
    return (
      <div className="match-list-empty">
        <div className="empty-icon">⚽</div>
        <h3>Không có trận đấu nào</h3>
        <p>Hiện tại không có trận đấu nào trong ngày hôm nay</p>
      </div>
    )
  }

  return (
    <div className="match-list">
      <h2>📋 Danh sách trận đấu</h2>
      <div className="matches-grid">
        {matches.map((match, index) => (
          <MatchCard key={match.fixture?.id || index} match={match} />
        ))}
      </div>
    </div>
  )
}

export default MatchList