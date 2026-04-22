import axios from 'axios'
import config from '../config'

const api = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'x-rapidapi-key': config.apiKey,
    'x-rapidapi-host': 'v3.football.api-sports.io'
  }
})

export const fetchFixtures = async (date, leagueId) => {
  try {
    const response = await api.get('/fixtures', {
      params: {
        date: date,
        league: leagueId,
        season: config.seasons.current
      }
    })
    return response.data.response
  } catch (error) {
    console.error('Error fetching fixtures:', error)
    throw error
  }
}

export const fetchLiveFixtures = async () => {
  try {
    const response = await api.get('/fixtures', {
      params: {
        live: 'all'
      }
    })
    return response.data.response
  } catch (error) {
    console.error('Error fetching live fixtures:', error)
    throw error
  }
}

export const fetchTeamStatistics = async (fixtureId) => {
  try {
    const response = await api.get('/fixtures/statistics', {
      params: {
        fixture: fixtureId
      }
    })
    return response.data.response
  } catch (error) {
    console.error('Error fetching team statistics:', error)
    throw error
  }
}

export const fetchPlayerStatistics = async (fixtureId) => {
  try {
    const response = await api.get('/fixtures/players', {
      params: {
        fixture: fixtureId
      }
    })
    return response.data.response
  } catch (error) {
    console.error('Error fetching player statistics:', error)
    throw error
  }
}

export const fetchLineups = async (fixtureId) => {
  try {
    const response = await api.get('/fixtures/lineups', {
      params: {
        fixture: fixtureId
      }
    })
    return response.data.response
  } catch (error) {
    console.error('Error fetching lineups:', error)
    throw error
  }
}

export const fetchHeadToHead = async (homeTeamId, awayTeamId) => {
  try {
    const response = await api.get('/fixtures/headtohead', {
      params: {
        h2h: `${homeTeamId}-${awayTeamId}`,
        last: 5
      }
    })
    return response.data.response
  } catch (error) {
    console.error('Error fetching head to head:', error)
    throw error
  }
}

export const fetchLeagueStandings = async (leagueId) => {
  try {
    const response = await api.get('/standings', {
      params: {
        league: leagueId,
        season: config.seasons.current
      }
    })
    return response.data.response
  } catch (error) {
    console.error('Error fetching standings:', error)
    throw error
  }
}

export default api