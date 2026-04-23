export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001'

export const LEAGUES = [
  { id: 39, name: 'Premier League', country: 'England' },
  { id: 140, name: 'LaLiga', country: 'Spain' },
  { id: 78, name: 'Bundesliga', country: 'Germany' },
  { id: 135, name: 'Serie A', country: 'Italy' },
  { id: 61, name: 'Ligue 1', country: 'France' }
]

export const DEFAULT_LEAGUE = 39
export const DEFAULT_SEASON = 2024