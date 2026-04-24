import { useState, useEffect } from 'react'
import { getPlayers } from '../lib/api'
import PlayerCard from '../components/PlayerCard'

function PlayersPage() {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm])

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const data = await getPlayers({ 
          search: debouncedSearch, 
          league: 39, 
          season: 2024 
        })
        setPlayers(data || [])
      } catch (err) {
        setError(err.message || 'Failed to fetch players')
        setPlayers([])
      } finally {
        setLoading(false)
      }
    }

    fetchPlayers()
  }, [debouncedSearch])

  return (
    <div className="page-container">
      <div className="page-header">
        <h2 className="page-title">Players</h2>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search players by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading && <div className="loading">Loading players...</div>}
      
      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}

      {!loading && !error && players.length === 0 && (
        <div className="empty-state">
          No players found
        </div>
      )}

      {!loading && !error && players.length > 0 && (
        <div className="grid-container">
          {players.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      )}
    </div>
  )
}

export default PlayersPage