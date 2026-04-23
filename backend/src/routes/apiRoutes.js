import express from 'express'

// Dữ liệu mẫu
const mockData = {
  matches: [
    {
      fixture: {
        id: 1001,
        date: new Date().toISOString(),
        status: { short: "LIVE", elapsed: 67 },
        venue: { name: "Emirates Stadium" }
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media.api-sports.io/football/leagues/39.png"
      },
      teams: {
        home: { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" },
        away: { id: 40, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" }
      },
      goals: { home: 2, away: 1 }
    },
    {
      fixture: {
        id: 1002,
        date: new Date().toISOString(),
        status: { short: "FT", elapsed: 90 },
        venue: { name: "Old Trafford" }
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media.api-sports.io/football/leagues/39.png"
      },
      teams: {
        home: { id: 33, name: "Manchester United", logo: "https://media.api-sports.io/football/teams/33.png" },
        away: { id: 49, name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png" }
      },
      goals: { home: 3, away: 2 }
    },
    {
      fixture: {
        id: 2001,
        date: new Date().toISOString(),
        status: { short: "LIVE", elapsed: 34 },
        venue: { name: "Santiago Bernabéu" }
      },
      league: {
        id: 140,
        name: "LaLiga",
        country: "Spain",
        logo: "https://media.api-sports.io/football/leagues/140.png"
      },
      teams: {
        home: { id: 541, name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/541.png" },
        away: { id: 529, name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" }
      },
      goals: { home: 1, away: 0 }
    },
    {
      fixture: {
        id: 2002,
        date: new Date().toISOString(),
        status: { short: "FT", elapsed: 90 },
        venue: { name: "Wanda Metropolitano" }
      },
      league: {
        id: 140,
        name: "LaLiga",
        country: "Spain",
        logo: "https://media.api-sports.io/football/leagues/140.png"
      },
      teams: {
        home: { id: 530, name: "Atletico Madrid", logo: "https://media.api-sports.io/football/teams/530.png" },
        away: { id: 536, name: "Sevilla", logo: "https://media.api-sports.io/football/teams/536.png" }
      },
      goals: { home: 2, away: 0 }
    }
  ],
  topPlayers: [
    { rank: 1, name: "Lamine Yamal", team: "FC Barcelona", rating: "8.5", photo: "https://media.api-sports.io/football/players/placeholder.png" },
    { rank: 2, name: "Kylian Mbappé", team: "Real Madrid", rating: "8.8", photo: "https://media.api-sports.io/football/players/placeholder.png" },
    { rank: 3, name: "Harry Kane", team: "FC Bayern München", rating: "8.7", photo: "https://media.api-sports.io/football/players/placeholder.png" },
    { rank: 4, name: "Erling Haaland", team: "Manchester City", rating: "8.6", photo: "https://media.api-sports.io/football/players/placeholder.png" },
    { rank: 5, name: "Jude Bellingham", team: "Real Madrid", rating: "8.4", photo: "https://media.api-sports.io/football/players/placeholder.png" }
  ]
}

const router = express.Router()

// Lấy danh sách trận đấu
router.get('/matches', (req, res) => {
  const { status } = req.query
  let matches = [...mockData.matches]
  
  if (status === 'live') {
    matches = matches.filter(m => m.fixture.status.short === 'LIVE')
  } else if (status === 'finished') {
    matches = matches.filter(m => m.fixture.status.short === 'FT')
  }
  
  res.json({ 
    success: true, 
    results: matches.length,
    response: matches 
  })
})

// Lấy chi tiết trận đấu
router.get('/match/:id', (req, res) => {
  const match = mockData.matches.find(m => m.fixture.id === parseInt(req.params.id))
  if (match) {
    res.json({ success: true, response: match })
  } else {
    res.status(404).json({ success: false, error: "Match not found" })
  }
})

// Lấy top players
router.get('/top-players', (req, res) => {
  res.json({ success: true, response: mockData.topPlayers })
})

// Tìm kiếm cầu thủ
router.get('/search-players', (req, res) => {
  const { search } = req.query
  if (!search) {
    return res.json({ success: true, response: [] })
  }
  const filtered = mockData.topPlayers.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  )
  res.json({ success: true, response: filtered })
})

// Bảng xếp hạng
router.get('/standings', (req, res) => {
  res.json({ 
    success: true, 
    response: [
      { rank: 1, team: "Liverpool", points: 82 },
      { rank: 2, team: "Arsenal", points: 80 },
      { rank: 3, team: "Manchester City", points: 78 }
    ]
  })
})

export default router