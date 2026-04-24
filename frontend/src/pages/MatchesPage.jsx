import { useState, useEffect } from 'react'
import { getMatches } from '../lib/api'
import MatchCard from '../components/MatchCard'

function MatchesPage() {
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const data = await getMatches()
        setMatches(data || [])
      } catch (err) {
        setError(err.message || 'Failed to fetch matches')
        setMatches([])
      } finally {
        setLoading(false)
      }
    }

    fetchMatches()
  }, [])

  return (
    <div className="page-container">
      <div className="page-header">
        <h2 className="page-title">Matches</h2>
      </div>

      {loading && <div className="loading">Loading matches...</div>}
      
      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}

      {!loading && !error && matches.length === 0 && (
        <div className="empty-state">
          No matches found
        </div>
      )}

      {!loading && !error && matches.length > 0 && (
        <div className="grid-container">
          {matches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MatchesPage