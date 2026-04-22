import React, { useState, useEffect } from 'react'
import TopBar from './components/TopBar'
import LeftPanel from './components/LeftPanel'
import Timeline from './components/Timeline'
import Lineups from './components/Lineups'
import PlayerStats from './components/PlayerStats'
import PlayerOfMatch from './components/PlayerOfMatch'
import HandicapCard from './components/HandicapCard'
import MomentumChart from './components/MomentumChart'
import { fetchMatches } from './lib/api'
import './App.css'

function App() {
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadMatches()
  }, [])

  const loadMatches = async () => {
    setLoading(true)
    try {
      const data = await fetchMatches()
      
      // Transform API data to match component format
      const transformedMatches = data.map(fixture => ({
        id: fixture.fixture.id,
        homeTeam: {
          name: fixture.teams.home.name,
          logo: fixture.teams.home.logo
        },
        awayTeam: {
          name: fixture.teams.away.name,
          logo: fixture.teams.away.logo
        },
        homeScore: fixture.goals.home ?? 0,
        awayScore: fixture.goals.away ?? 0,
        status: fixture.fixture.status.short,
        date: fixture.fixture.date,
        venue: fixture.fixture.venue.name
      }))
      
      setMatches(transformedMatches)
      if (transformedMatches.length > 0) {
        setSelectedMatch(transformedMatches[0])
      }
    } catch (error) {
      console.error('Error loading matches:', error)
    } finally {
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
    <div className="app">
      <TopBar onSearch={setMatches} />
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
  )
}

export default App