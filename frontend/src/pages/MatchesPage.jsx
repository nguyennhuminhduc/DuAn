import React, { useEffect, useState } from 'react'
import MatchList from '../components/matches/MatchList'
import Loader from '../components/common/Loader'
import ErrorMessage from '../components/common/ErrorMessage'
import { api } from "../lib/api"
import './MatchesPage.css'

const MatchesPage = () => {
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    loadMatches()
  }, [filter])

  const loadMatches = async () => {
    setLoading(true)
    setError(null)
    try {
      let data
      if (filter === 'live') {
        data = await getLiveMatches()
      } else {
        data = await getMatches()
      }
      setMatches(data || [])
    } catch (err) {
      console.error('Load matches error:', err)
      setError(err.message || 'Không thể tải dữ liệu trận đấu')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="matches-page">
      <div className="page-header">
        <h1>📅 Lịch thi đấu</h1>
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tất cả
          </button>
          <button 
            className={`filter-btn ${filter === 'live' ? 'active' : ''}`}
            onClick={() => setFilter('live')}
          >
            🔴 Trực tiếp
          </button>
        </div>
      </div>
      
      {loading && <Loader message="Đang tải trận đấu..." />}
      {error && <ErrorMessage message={error} onRetry={loadMatches} />}
      
      {!loading && !error && (
        <MatchList matches={matches} loading={loading} />
      )}
    </div>
  )
}

export default MatchesPage