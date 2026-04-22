import axios from 'axios'
import Match from '../models/Match.js'
import Team from '../models/Team.js'

const API_KEY = process.env.API_KEY
const API_URL = process.env.API_URL

// Lấy trận đấu từ API-Football
export const getFixtures = async (req, res) => {
  try {
    const { date, league, live } = req.query
    let params = { season: '2024' }
    
    if (live === 'all') {
      params.live = 'all'
    } else {
      params.date = date || new Date().toISOString().split('T')[0]
      if (league) params.league = league
    }
    
    const response = await axios.get(`${API_URL}/fixtures`, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      },
      params
    })
    
    // Lưu vào database
    const fixtures = response.data.response
    for (const fixture of fixtures) {
      await Match.findOneAndUpdate(
        { fixtureId: fixture.fixture.id },
        {
          fixtureId: fixture.fixture.id,
          date: fixture.fixture.date,
          status: fixture.fixture.status.short,
          league: fixture.league,
          homeTeam: {
            id: fixture.teams.home.id,
            name: fixture.teams.home.name,
            logo: fixture.teams.home.logo,
            goals: fixture.goals.home
          },
          awayTeam: {
            id: fixture.teams.away.id,
            name: fixture.teams.away.name,
            logo: fixture.teams.away.logo,
            goals: fixture.goals.away
          },
          venue: fixture.fixture.venue.name,
          referee: fixture.fixture.referee
        },
        { upsert: true }
      )
    }
    
    res.json({ success: true, data: fixtures })
  } catch (error) {
    console.error('Error fetching fixtures:', error)
    res.status(500).json({ success: false, error: error.message })
  }
}

// Lấy chi tiết trận đấu
export const getFixtureDetails = async (req, res) => {
  try {
    const { id } = req.params
    
    // Lấy từ database trước
    let match = await Match.findOne({ fixtureId: id })
    
    // Nếu không có, gọi API
    if (!match) {
      const response = await axios.get(`${API_URL}/fixtures`, {
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'v3.football.api-sports.io'
        },
        params: { id }
      })
      
      const fixture = response.data.response[0]
      if (fixture) {
        match = await Match.create({
          fixtureId: fixture.fixture.id,
          date: fixture.fixture.date,
          status: fixture.fixture.status.short,
          league: fixture.league,
          homeTeam: {
            id: fixture.teams.home.id,
            name: fixture.teams.home.name,
            logo: fixture.teams.home.logo,
            goals: fixture.goals.home
          },
          awayTeam: {
            id: fixture.teams.away.id,
            name: fixture.teams.away.name,
            logo: fixture.teams.away.logo,
            goals: fixture.goals.away
          },
          venue: fixture.fixture.venue.name
        })
      }
    }
    
    res.json({ success: true, data: match })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

// Lấy thống kê trận đấu
export const getStatistics = async (req, res) => {
  try {
    const { fixtureId } = req.params
    
    const response = await axios.get(`${API_URL}/fixtures/statistics`, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      },
      params: { fixture: fixtureId }
    })
    
    res.json({ success: true, data: response.data.response })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

// Lấy đội hình
export const getLineups = async (req, res) => {
  try {
    const { fixtureId } = req.params
    
    const response = await axios.get(`${API_URL}/fixtures/lineups`, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      },
      params: { fixture: fixtureId }
    })
    
    res.json({ success: true, data: response.data.response })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

// Lấy events (diễn biến)
export const getEvents = async (req, res) => {
  try {
    const { fixtureId } = req.params
    
    const response = await axios.get(`${API_URL}/fixtures/events`, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      },
      params: { fixture: fixtureId }
    })
    
    res.json({ success: true, data: response.data.response })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

// Lấy bảng xếp hạng
export const getStandings = async (req, res) => {
  try {
    const { league, season } = req.query
    
    const response = await axios.get(`${API_URL}/standings`, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      },
      params: { league, season: season || '2024' }
    })
    
    res.json({ success: true, data: response.data.response })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}