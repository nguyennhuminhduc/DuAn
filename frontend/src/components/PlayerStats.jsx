import React, { useState, useEffect } from 'react'
import './PlayerStats.css'

const PlayerStats = ({ matchId }) => {
  const [stats, setStats] = useState([])

  useEffect(() => {
    // Mock data - In real app, fetch from API
    const mockStats = [
      { name: 'Marcus Rashford', team: 'home', goals: 1, assists: 0, shots: 4, passes: 32, tackles: 2 },
      { name: 'Bruno Fernandes', team: 'home', goals: 1, assists: 1, shots: 3, passes: 45, tackles: 3 },
      { name: 'Mohamed Salah', team: 'away', goals: 1, assists: 0, shots: 5, passes: 28, tackles: 1 },
      { name: 'Casemiro', team: 'home', goals: 0, assists: 0, shots: 1, passes: 38, tackles: 5 },
      { name: 'Virgil van Dijk', team: 'away', goals: 0, assists: 0, shots: 0, passes: 52, tackles: 2 }
    ]
    setStats(mockStats)
  }, [matchId])

  return (
    <div className="player-stats">
      <h3>Thống kê cầu thủ</h3>
      <div className="stats-table">
        <table>
          <thead>
            <tr>
              <th>Cầu thủ</th>
              <th>Bàn</th>
              <th>Kiến tạo</th>
              <th>Sút</th>
              <th>Chuyền</th>
              <th>Tắc bóng</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((player, idx) => (
              <tr key={idx} className={player.team}>
                <td className="player-name-cell">{player.name}</td>
                <td>{player.goals}</td>
                <td>{player.assists}</td>
                <td>{player.shots}</td>
                <td>{player.passes}</td>
                <td>{player.tackles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PlayerStats