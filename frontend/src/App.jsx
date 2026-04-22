import React, { useState, useEffect } from 'react'
import TopBar from './components/TopBar'
import LeftPanel from './components/LeftPanel'
import MatchDetails from './components/MatchDetails'
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
        status: fixture.fixture.status.short === 'FT' ? 'Full Time' : 
                 fixture.fixture.status.short === 'LIVE' ? 'Live' : 'Not Started',
        date: fixture.fixture.date,
        venue: fixture.fixture.venue.name,
        additionalTime: fixture.fixture.status.elapsed || null
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
      <TopBar />
      <div className="main-container">
        <LeftPanel 
          matches={matches} 
          selectedMatch={selectedMatch}
          onSelectMatch={setSelectedMatch} 
        />
        <div className="content-container">
          {selectedMatch ? (
            <MatchDetails match={selectedMatch} />
          ) : (
            <div className="no-match">Chọn một trận đấu để xem chi tiết</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App