import React, { useState, useEffect } from 'react'
import api from '../lib/api'
import './Timeline.css'

const Timeline = ({ matchId }) => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // API endpoint cho events - bạn cần thêm vào backend
        const response = await api.get(`/api/events/${matchId}`)
        if (response.data.response) {
          const transformedEvents = response.data.response.map(event => ({
            id: event.time.elapsed,
            time: event.time.elapsed,
            type: event.type,
            team: event.team?.name?.includes('Home') ? 'home' : 'away',
            player: event.player?.name,
            description: event.detail
          }))
          setEvents(transformedEvents)
        }
      } catch (error) {
        console.error('Error fetching events:', error)
        // Mock data fallback
        setEvents([
          { id: 1, time: 23, type: 'goal', team: 'home', player: 'Rashford', description: 'Sút xa' }
        ])
      }
    }
    
    if (matchId) fetchEvents()
  }, [matchId])

  // ... rest of component remains same
}

export default Timeline