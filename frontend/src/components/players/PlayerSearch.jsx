import React, { useState } from 'react'
import { LEAGUES } from '../../constants'
import './PlayerSearch.css'

const PlayerSearch = ({ onSearch, loading }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLeague, setSelectedLeague] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim(), selectedLeague || null)
    }
  }

  return (
    <div className="player-search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            className="search-input"
            placeholder="Nhập tên cầu thủ... (VD: Messi, Ronaldo, Mbappé)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            disabled={loading}
            autoFocus
          />
          <select
            className="league-select"
            value={selectedLeague}
            onChange={(e) => setSelectedLeague(e.target.value)}
            disabled={loading}
          >
            <option value="">Tất cả giải đấu</option>
            {LEAGUES.map(league => (
              <option key={league.id} value={league.id}>
                {league.name} ({league.country})
              </option>
            ))}
          </select>
          <button type="submit" className="search-btn" disabled={loading || !searchTerm.trim()}>
            {loading ? '⏳ Đang tìm...' : '🔍 Tìm kiếm'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default PlayerSearch