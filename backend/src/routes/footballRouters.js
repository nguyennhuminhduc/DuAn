import express from 'express'
import {
  getFixtures,
  getFixtureDetails,
  getStatistics,
  getLineups,
  getEvents,
  getStandings
} from '../controllers/footballControllers.js'

const router = express.Router()

router.get('/fixtures', getFixtures)
router.get('/fixture/:id', getFixtureDetails)
router.get('/statistics/:fixtureId', getStatistics)
router.get('/lineups/:fixtureId', getLineups)
router.get('/events/:fixtureId', getEvents)
router.get('/standings', getStandings)

export default router