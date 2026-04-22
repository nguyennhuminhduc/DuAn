const config = {
  apiKey: import.meta.env.VITE_API_KEY,
  apiUrl: import.meta.env.VITE_API_URL,
  leagues: {
    premierLeague: 39,
    laLiga: 140,
    bundesliga: 78,
    serieA: 135,
    ligue1: 61
  },
  seasons: {
    current: 2024
  }
}

export default config