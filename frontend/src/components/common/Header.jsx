import React from 'react'
import './Header.css'

const Header = ({ activePage, onPageChange }) => {
  const navItems = [
    { id: 'home', label: '🏠 Trang chủ' },
    { id: 'players', label: '⚽ Cầu thủ' },
    { id: 'matches', label: '📅 Trận đấu' }
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>⚽ FootballHub</h1>
          <p>Dữ liệu bóng đá trực tiếp</p>
        </div>
        <nav className="nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-btn ${activePage === item.id ? 'active' : ''}`}
              onClick={() => onPageChange(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header