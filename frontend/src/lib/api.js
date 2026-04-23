import axios from 'axios'
import { API_BASE_URL, DEFAULT_SEASON } from '../constants'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(`📡 API Request: ${config.method?.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

// ============== PLAYER API ==============

/**
 * Search players by name
 * @param {string} searchTerm - Player name to search
 * @param {number} leagueId - League ID (optional)
 * @param {number} season - Season year
 * @returns {Promise<Array>} List of players
 */
export const searchPlayers = async (searchTerm, leagueId = null, season = DEFAULT_SEASON) => {
  try {
    const params = { search: searchTerm, season }
    if (leagueId) params.league = leagueId
    
    const response = await api.get('/api/players', { params })
    return response.data?.response || []
  } catch (error) {
    console.error('Search players error:', error)
    throw error
  }
}

/**
 * Get player statistics
 * @param {number} playerId - Player ID
 * @param {number} season - Season year
 * @returns {Promise<Object>} Player statistics
 */
export const getPlayerStats = async (playerId, season = DEFAULT_SEASON) => {
  try {
    const response = await api.get('/api/players', {
      params: { id: playerId, season }
    })
    return response.data?.response?.[0] || null
  } catch (error) {
    console.error('Get player stats error:', error)
    throw error
  }
}

// ============== MATCHES API ==============

/**
 * Get matches by date
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {Promise<Array>} List of matches
 */
export const getMatches = async (date = null) => {
  try {
    const params = date ? { date } : {}
    const response = await api.get('/api/matches', { params })
    return response.data?.response || []
  } catch (error) {
    console.error('Get matches error:', error)
    throw error
  }
}

/**
 * Get live matches
 * @returns {Promise<Array>} List of live matches
 */
export const getLiveMatches = async () => {
  try {
    const response = await api.get('/api/matches', { params: { live: 'all' } })
    return response.data?.response || []
  } catch (error) {
    console.error('Get live matches error:', error)
    throw error
  }
}

/**
 * Get match statistics
 * @param {number} fixtureId - Match fixture ID
 * @returns {Promise<Object>} Match statistics
 */
export const getMatchStats = async (fixtureId) => {
  try {
    const response = await api.get(`/api/statistics/${fixtureId}`)
    return response.data?.response || []
  } catch (error) {
    console.error('Get match stats error:', error)
    throw error
  }
}

// ============== STANDINGS API ==============

/**
 * Get league standings
 * @param {number} leagueId - League ID
 * @param {number} season - Season year
 * @returns {Promise<Array>} League standings
 */
export const getStandings = async (leagueId, season = DEFAULT_SEASON) => {
  try {
    const response = await api.get('/api/standings', {
      params: { league: leagueId, season }
    })
    return response.data?.response || []
  } catch (error) {
    console.error('Get standings error:', error)
    throw error
  }
}

export default api