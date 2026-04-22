import React, { useState } from 'react'
import { searchPlayers } from '../lib/api'
import './TopBar.css'

const TopBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchTerm.trim()) return
    
    try {
      const results = await searchPlayers(searchTerm)
      setSearchResults(results)
      setShowResults(true)
      
      // Auto hide results after 5 seconds
      setTimeout(() => setShowResults(false), 5000)
    } catch (error) {
      console.error('Search error:', error)
    }
  }

  return (
    <div className="top-bar">
      <div className="logo">
        <h1>⚽ FootballLive</h1>
      </div>
      <div className="nav-links">
        <a href="/">Trang chủ</a>
        <a href="/matches">Trận đấu</a>
        <a href="/rankings">Bảng xếp hạng</a>
        <a href="/news">Tin tức</a>
      </div>
      <form onSubmit={handleSearch} className="search-box">
        <input
          type="text"
          placeholder="Tìm kiếm cầu thủ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      
      {showResults && searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.slice(0, 5).map((player) => (
            <div key={player.player.id} className="search-result-item">
              <img src={player.player.photo} alt={player.player.name} />
              <div>
                <div className="player-name">{player.player.name}</div>
                <div className="player-team">{player.statistics[0]?.team?.name}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TopBar