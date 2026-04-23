// Dữ liệu mẫu cho các giải đấu top tier
export const mockData = {
  matches: [
    // Premier League - 22/04/2026
    {
      fixture: {
        id: 1001,
        date: "2026-04-22T14:00:00Z",
        status: { short: "LIVE", elapsed: 67, long: "In Progress" },
        venue: { name: "Emirates Stadium", city: "London" }
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media.api-sports.io/football/leagues/39.png",
        flag: "https://media.api-sports.io/flags/gb.svg"
      },
      teams: {
        home: { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" },
        away: { id: 40, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" }
      },
      goals: { home: 2, away: 1 },
      score: { halftime: { home: 1, away: 0 }, fulltime: { home: 2, away: 1 } }
    },
    {
      fixture: {
        id: 1002,
        date: "2026-04-22T14:00:00Z",
        status: { short: "FT", elapsed: 90, long: "Match Finished" },
        venue: { name: "Old Trafford", city: "Manchester" }
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media.api-sports.io/football/leagues/39.png",
        flag: "https://media.api-sports.io/flags/gb.svg"
      },
      teams: {
        home: { id: 33, name: "Manchester United", logo: "https://media.api-sports.io/football/teams/33.png" },
        away: { id: 49, name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png" }
      },
      goals: { home: 3, away: 2 },
      score: { halftime: { home: 1, away: 1 }, fulltime: { home: 3, away: 2 } }
    },
    {
      fixture: {
        id: 1003,
        date: "2026-04-22T16:30:00Z",
        status: { short: "NS", elapsed: 0, long: "Not Started" },
        venue: { name: "Etihad Stadium", city: "Manchester" }
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media.api-sports.io/football/leagues/39.png",
        flag: "https://media.api-sports.io/flags/gb.svg"
      },
      teams: {
        home: { id: 50, name: "Manchester City", logo: "https://media.api-sports.io/football/teams/50.png" },
        away: { id: 47, name: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png" }
      },
      goals: { home: 0, away: 0 }
    },
    // LaLiga
    {
      fixture: {
        id: 2001,
        date: "2026-04-22T19:00:00Z",
        status: { short: "LIVE", elapsed: 52, long: "In Progress" },
        venue: { name: "Santiago Bernabéu", city: "Madrid" }
      },
      league: {
        id: 140,
        name: "LaLiga",
        country: "Spain",
        logo: "https://media.api-sports.io/football/leagues/140.png",
        flag: "https://media.api-sports.io/flags/es.svg"
      },
      teams: {
        home: { id: 541, name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/541.png" },
        away: { id: 529, name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" }
      },
      goals: { home: 1, away: 0 },
      score: { halftime: { home: 0, away: 0 }, fulltime: { home: 1, away: 0 } }
    },
    {
      fixture: {
        id: 2002,
        date: "2026-04-22T17:15:00Z",
        status: { short: "FT", elapsed: 90, long: "Match Finished" },
        venue: { name: "Wanda Metropolitano", city: "Madrid" }
      },
      league: {
        id: 140,
        name: "LaLiga",
        country: "Spain",
        logo: "https://media.api-sports.io/football/leagues/140.png",
        flag: "https://media.api-sports.io/flags/es.svg"
      },
      teams: {
        home: { id: 530, name: "Atletico Madrid", logo: "https://media.api-sports.io/football/teams/530.png" },
        away: { id: 536, name: "Sevilla", logo: "https://media.api-sports.io/football/teams/536.png" }
      },
      goals: { home: 2, away: 0 }
    },
    {
      fixture: {
        id: 2003,
        date: "2026-04-22T20:00:00Z",
        status: { short: "NS", elapsed: 0, long: "Not Started" },
        venue: { name: "Mestalla", city: "Valencia" }
      },
      league: {
        id: 140,
        name: "LaLiga",
        country: "Spain",
        logo: "https://media.api-sports.io/football/leagues/140.png",
        flag: "https://media.api-sports.io/flags/es.svg"
      },
      teams: {
        home: { id: 532, name: "Valencia", logo: "https://media.api-sports.io/football/teams/532.png" },
        away: { id: 533, name: "Villarreal", logo: "https://media.api-sports.io/football/teams/533.png" }
      },
      goals: { home: 0, away: 0 }
    }
  ],
  players: [
    { rank: 1, name: "Lamine Yamal", team: "FC Barcelona", rating: 8.5, photo: "https://media.api-sports.io/football/players/placeholder.png" },
    { rank: 2, name: "Kylian Mbappé", team: "Real Madrid", rating: 8.8, photo: "https://media.api-sports.io/football/players/placeholder.png" },
    { rank: 3, name: "Harry Kane", team: "FC Bayern München", rating: 8.7, photo: "https://media.api-sports.io/football/players/placeholder.png" },
    { rank: 4, name: "Erling Haaland", team: "Manchester City", rating: 8.6, photo: "https://media.api-sports.io/football/players/placeholder.png" },
    { rank: 5, name: "Jude Bellingham", team: "Real Madrid", rating: 8.4, photo: "https://media.api-sports.io/football/players/placeholder.png" }
  ],
  standings: {
    premierLeague: [
      { rank: 1, team: "Liverpool", points: 82, played: 34, logo: "https://media.api-sports.io/football/teams/40.png" },
      { rank: 2, team: "Arsenal", points: 80, played: 34, logo: "https://media.api-sports.io/football/teams/42.png" },
      { rank: 3, team: "Manchester City", points: 78, played: 34, logo: "https://media.api-sports.io/football/teams/50.png" }
    ],
    laLiga: [
      { rank: 1, team: "Real Madrid", points: 85, played: 34, logo: "https://media.api-sports.io/football/teams/541.png" },
      { rank: 2, team: "Barcelona", points: 82, played: 34, logo: "https://media.api-sports.io/football/teams/529.png" },
      { rank: 3, team: "Atletico Madrid", points: 70, played: 34, logo: "https://media.api-sports.io/football/teams/530.png" }
    ]
  }
}

// Controller functions
export const getMatches = (req, res) => {
  const { date, status } = req.query
  
  let matches = [...mockData.matches]
  
  if (status === 'live') {
    matches = matches.filter(m => m.fixture.status.short === 'LIVE')
  } else if (status === 'finished') {
    matches = matches.filter(m => m.fixture.status.short === 'FT')
  } else if (status === 'upcoming') {
    matches = matches.filter(m => m.fixture.status.short === 'NS')
  }
  
  res.json({ 
    success: true, 
    results: matches.length,
    response: matches 
  })
}

export const getMatchById = (req, res) => {
  const { id } = req.params
  const match = mockData.matches.find(m => m.fixture.id === parseInt(id))
  
  if (match) {
    res.json({ success: true, response: match })
  } else {
    res.status(404).json({ success: false, error: "Match not found" })
  }
}

export const getTopPlayers = (req, res) => {
  res.json({ success: true, response: mockData.players })
}

export const getStandings = (req, res) => {
  const { league } = req.query
  if (league === '39') {
    res.json({ success: true, response: mockData.standings.premierLeague })
  } else if (league === '140') {
    res.json({ success: true, response: mockData.standings.laLiga })
  } else {
    res.json({ success: true, response: mockData.standings })
  }
}

export const searchPlayers = (req, res) => {
  const { search } = req.query
  if (!search) {
    return res.json({ success: true, response: [] })
  }
  
  const filtered = mockData.players.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  )
  res.json({ success: true, response: filtered })
}