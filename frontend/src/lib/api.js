const BASE_URL = 'http://localhost:5001/api'

async function apiRequest(endpoint, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('API request failed:', error)
    throw error
  }
}

export async function getPlayers(params = {}) {
  const queryParams = new URLSearchParams()
  
  if (params.search) {
    queryParams.append('search', params.search)
  }
  if (params.league) {
    queryParams.append('league', params.league)
  }
  if (params.season) {
    queryParams.append('season', params.season)
  }

  const queryString = queryParams.toString()
  const endpoint = `/players${queryString ? `?${queryString}` : ''}`
  
  return apiRequest(endpoint)
}

export async function getMatches() {
  return apiRequest('/matches')
}