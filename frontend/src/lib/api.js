import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Lấy danh sách trận đấu hôm nay
export const fetchMatches = async () => {
  try {
    const response = await api.get('/api/matches')
    return response.data.response || []
  } catch (error) {
    console.error('Error fetching matches:', error)
    return []
  }
}

// Lấy thông tin cầu thủ
export const searchPlayers = async (searchTerm) => {
  try {
    const response = await api.get('/api/players', {
      params: { search: searchTerm }
    })
    return response.data.response || []
  } catch (error) {
    console.error('Error searching players:', error)
    return []
  }
}

// Lấy bảng xếp hạng
export const fetchStandings = async () => {
  try {
    const response = await api.get('/api/standings')
    return response.data.response || []
  } catch (error) {
    console.error('Error fetching standings:', error)
    return []
  }
}

export default api