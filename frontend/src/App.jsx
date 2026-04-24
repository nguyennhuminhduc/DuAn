import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import PlayersPage from './pages/PlayersPage'
import MatchesPage from './pages/MatchesPage'
import './App.css'

function App() {
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
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content fade-in">
        {renderPage()}
      </main>
    </div>
  )
}

export default App