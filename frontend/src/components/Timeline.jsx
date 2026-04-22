import React, { useState, useEffect } from 'react'
import './Timeline.css'

const Timeline = ({ matchId }) => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    // Mock data - In real app, fetch from API
    const mockEvents = [
      { id: 1, time: 23, type: 'goal', team: 'home', player: 'Marcus Rashford', description: 'Sút xa đẹp mắt' },
      { id: 2, time: 45, type: 'yellow', team: 'away', player: 'Virgil van Dijk', description: 'Phạm lỗi chiến thuật' },
      { id: 3, time: 67, type: 'goal', team: 'away', player: 'Mohamed Salah', description: 'Đánh đầu cận thành' },
      { id: 4, time: 78, type: 'goal', team: 'home', player: 'Bruno Fernandes', description: 'Penalty' },
      { id: 5, time: 89, type: 'sub', team: 'home', player: 'Anthony Martial', description: 'Vào sân thay Mason Greenwood' }
    ]
    setEvents(mockEvents)
  }, [matchId])

  const getEventIcon = (type) => {
    switch(type) {
      case 'goal': return '⚽'
      case 'yellow': return '🟨'
      case 'red': return '🟥'
      case 'sub': return '🔄'
      default: return '📋'
    }
  }

  return (
    <div className="timeline">
      <h3>Diễn biến trận đấu</h3>
      <div className="timeline-container">
        {events.map((event, index) => (
          <div key={event.id} className={`timeline-event ${event.team}`}>
            <div className="event-time">{event.time}'</div>
            <div className="event-icon">{getEventIcon(event.type)}</div>
            <div className="event-details">
              <div className="event-player">{event.player}</div>
              <div className="event-description">{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline