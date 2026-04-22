import React, { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './MomentumChart.css'

const MomentumChart = ({ matchId }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    // Mock data - In real app, fetch from API
    const mockData = [
      { minute: 0, home: 50, away: 50 },
      { minute: 15, home: 55, away: 45 },
      { minute: 30, home: 60, away: 40 },
      { minute: 45, home: 58, away: 42 },
      { minute: 60, home: 52, away: 48 },
      { minute: 75, home: 48, away: 52 },
      { minute: 90, home: 55, away: 45 }
    ]
    setData(mockData)
  }, [matchId])

  return (
    <div className="momentum-chart">
      <h3>Thế trận</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="minute" label={{ value: 'Phút', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Kiểm soát bóng (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="home" stroke="#667eea" name="Đội nhà" strokeWidth={2} />
          <Line type="monotone" dataKey="away" stroke="#764ba2" name="Đội khách" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MomentumChart