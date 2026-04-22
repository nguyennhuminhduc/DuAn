import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import TopBar from './components/TopBar'
import LeftPanel from './components/LeftPanel'
import Timeline from './components/Timeline'
import Lineups from './components/Lineups'
import PlayerStats from './components/PlayerStats'
import PlayerOfMatch from './components/PlayerOfMatch'
import HandicapCard from './components/HandicapCard'
import MomentumChart from './components/MomentumChart'
import './App.css'

function App() {
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMatches()
  }, [])

  const fetchMatches = async () => {
    try {
      // Simulate API data - In real app, call your backend
      const mockMatches = [
        {
          id: 1,
          homeTeam: { name: 'Manchester United', logo: 'https://media.api-sports.io/football/teams/33.png' },
          awayTeam: { name: 'Liverpool', logo: 'https://media.api-sports.io/football/teams/40.png' },
          homeScore: 2,
          awayScore: 1,
          status: 'FT',
          date: '2024-03-10T15:00:00Z',
          venue: 'Old Trafford'
        },
        {
          id: 2,
          homeTeam: { name: 'Real Madrid', logo: 'https://media.api-sports.io/football/teams/541.png' },
          awayTeam: { name: 'Barcelona', logo: 'https://media.api-sports.io/football/teams/529.png' },
          homeScore: 3,
          awayScore: 2,
          status: 'FT',
          date: '2024-03-10T19:00:00Z',
          venue: 'Santiago Bernabéu'
        },
        {
          id: 3,
          homeTeam: { name: 'Bayern Munich', logo: 'https://media.api-sports.io/football/teams/157.png' },
          awayTeam: { name: 'Borussia Dortmund', logo: 'https://media.api-sports.io/football/teams/165.png' },
          homeScore: 0,
          awayScore: 0,
          status: 'LIVE',
          date: '2024-03-11T16:30:00Z',
          venue: 'Allianz Arena'
        }
      ]
      setMatches(mockMatches)
      if (mockMatches.length > 0) {
        setSelectedMatch(mockMatches[0])
      }
      setLoading(false)
    } catch (error) {
      console.error('Error fetching matches:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Đang tải dữ liệu...</p>
      </div>
    )
  }

  return (
    <Router>
      <div className="app">
        <TopBar />
        <div className="main-container">
          <LeftPanel matches={matches} onSelectMatch={setSelectedMatch} />
          <div className="content-container">
            {selectedMatch ? (
              <>
                <div className="match-header">
                  <div className="team">
                    <img src={selectedMatch.homeTeam.logo} alt={selectedMatch.homeTeam.name} />
                    <span>{selectedMatch.homeTeam.name}</span>
                    <span className="score">{selectedMatch.homeScore}</span>
                  </div>
                  <div className="vs">VS</div>
                  <div className="team">
                    <span className="score">{selectedMatch.awayScore}</span>
                    <span>{selectedMatch.awayTeam.name}</span>
                    <img src={selectedMatch.awayTeam.logo} alt={selectedMatch.awayTeam.name} />
                  </div>
                </div>
                <div className="match-info">
                  <span>{selectedMatch.venue}</span>
                  <span className="status">{selectedMatch.status}</span>
                </div>
                <div className="stats-grid">
                  <Timeline matchId={selectedMatch.id} />
                  <Lineups matchId={selectedMatch.id} />
                  <PlayerStats matchId={selectedMatch.id} />
                  <PlayerOfMatch matchId={selectedMatch.id} />
                  <HandicapCard matchId={selectedMatch.id} />
                  <MomentumChart matchId={selectedMatch.id} />
                </div>
              </>
            ) : (
              <div className="no-match">Chọn một trận đấu để xem chi tiết</div>
            )}
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App