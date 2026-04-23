import React, { useState } from 'react'
import Header from './components/common/Header'
import HomePage from './pages/HomePage'
import PlayersPage from './pages/PlayersPage'
import MatchesPage from './pages/MatchesPage'
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'players':
        return <PlayersPage />
      case 'matches':
        return <MatchesPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="app">
      <Header activePage={currentPage} onPageChange={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <p>© 2024 FootballHub - Dữ liệu bóng đá trực tiếp</p>
      </footer>
    </div>
  )
}

export default App