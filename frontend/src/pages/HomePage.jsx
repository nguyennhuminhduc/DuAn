import React, { useEffect, useState } from 'react'
import MatchList from '../components/matches/MatchList'
import Loader from '../components/common/Loader'
import ErrorMessage from '../components/common/ErrorMessage'
import { api } from "../lib/api";
import './HomePage.css'

const HomePage = () => {
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadMatches()
  }, [])

  const loadMatches = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getMatches()
      setMatches(data || [])
    } catch (err) {
      console.error('Load matches error:', err)
      setError(err.message || 'Không thể tải dữ liệu trận đấu')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loader message="Đang tải trận đấu..." />
  if (error) return <ErrorMessage message={error} onRetry={loadMatches} />

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>⚽ Chào mừng đến với FootballHub</h1>
        <p>Cập nhật kết quả bóng đá trực tiếp, thông tin cầu thủ và nhiều hơn nữa</p>
      </div>
      <MatchList matches={matches} loading={loading} />
    </div>
  )
}

export default HomePage