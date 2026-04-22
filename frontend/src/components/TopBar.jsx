import React, { useState } from 'react'
import './TopBar.css'

const TopBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchTerm)
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
          placeholder="Tìm kiếm trận đấu, đội bóng..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
    </div>
  )
}

export default TopBar