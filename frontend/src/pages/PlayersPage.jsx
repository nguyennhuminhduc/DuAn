import React, { useState } from 'react'
import PlayerSearch from '../components/players/PlayerSearch'
import PlayerList from '../components/players/PlayerList'
import Loader from '../components/common/Loader'
import ErrorMessage from '../components/common/ErrorMessage'
import { api } from "../lib/api";
import './PlayersPage.css'

const PlayersPage = () => {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchPerformed, setSearchPerformed] = useState(false)
  const [lastSearchTerm, setLastSearchTerm] = useState('')

  const handleSearch = async (searchTerm, leagueId) => {
    if (!searchTerm.trim()) {
      setError('Vui lòng nhập tên cầu thủ cần tìm')
      return
    }

    setLoading(true)
    setError(null)
    setSearchPerformed(true)
    setLastSearchTerm(searchTerm)
    
    try {
      const results = await searchPlayers(searchTerm, leagueId)
      console.log('Search results:', results) // Debug log
      setPlayers(results || [])
      
      if (!results || results.length === 0) {
        setError(`Không tìm thấy cầu thủ nào với tên "${searchTerm}"`)
      }
    } catch (err) {
      console.error('Search error:', err)
      setError(err.message || 'Không thể tìm kiếm cầu thủ. Vui lòng thử lại sau.')
      setPlayers([])
    } finally {
      setLoading(false)
    }
  }

  const handleRetry = () => {
    if (lastSearchTerm) {
      handleSearch(lastSearchTerm, null)
    }
  }

  return (
    <div className="players-page">
      <div className="page-header">
        <h1>🔍 Tìm kiếm cầu thủ</h1>
        <p>Tìm kiếm thông tin cầu thủ từ các giải đấu hàng đầu thế giới</p>
        <div className="example-search">
          <span>Ví dụ: </span>
          <button onClick={() => handleSearch('Messi', null)} className="example-btn">Messi</button>
          <button onClick={() => handleSearch('Ronaldo', null)} className="example-btn">Ronaldo</button>
          <button onClick={() => handleSearch('Mbappé', null)} className="example-btn">Mbappé</button>
          <button onClick={() => handleSearch('Salah', null)} className="example-btn">Salah</button>
          <button onClick={() => handleSearch('Haaland', null)} className="example-btn">Haaland</button>
        </div>
      </div>
      
      <PlayerSearch onSearch={handleSearch} loading={loading} />
      
      {loading && <Loader message="Đang tìm kiếm cầu thủ..." />}
      
      {error && !loading && (
        <ErrorMessage 
          message={error} 
          onRetry={searchPerformed ? handleRetry : undefined} 
        />
      )}
      
      {!loading && !error && (
        <PlayerList 
          players={players} 
          loading={loading} 
          searchPerformed={searchPerformed} 
        />
      )}
    </div>
  )
}

export default PlayersPage