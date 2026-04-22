import React, { useState, useEffect } from 'react'
import './HandicapCard.css'

const HandicapCard = ({ matchId }) => {
  const [handicaps, setHandicaps] = useState([])

  useEffect(() => {
    // Mock data - In real app, fetch from API
    const mockHandicaps = [
      { type: 'Châu Á', home: '-0.5', away: '+0.5', ratio: '0.95' },
      { type: 'Tài/Xỉu', home: '2.5', away: '2.5', ratio: '0.88' },
      { type: 'Châu Âu', home: '2.10', draw: '3.40', away: '3.20' }
    ]
    setHandicaps(mockHandicaps)
  }, [matchId])

  return (
    <div className="handicap-card">
      <h3>Tỷ lệ kèo</h3>
      <div className="odds-container">
        {handicaps.map((item, idx) => (
          <div key={idx} className="odd-item">
            <div className="odd-type">{item.type}</div>
            {item.type === 'Châu Âu' ? (
              <div className="odd-values">
                <span>1: {item.home}</span>
                <span>X: {item.draw}</span>
                <span>2: {item.away}</span>
              </div>
            ) : (
              <div className="odd-values">
                <span>{item.home}</span>
                <span>vs</span>
                <span>{item.away}</span>
                <span className="odd-ratio">Tỷ lệ: {item.ratio}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HandicapCard