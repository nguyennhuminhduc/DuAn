import mongoose from 'mongoose'

const matchSchema = new mongoose.Schema({
  fixtureId: { type: Number, required: true, unique: true },
  date: { type: Date, required: true },
  status: { type: String, required: true },
  league: {
    id: Number,
    name: String,
    country: String,
    logo: String
  },
  homeTeam: {
    id: Number,
    name: String,
    logo: String,
    goals: Number
  },
  awayTeam: {
    id: Number,
    name: String,
    logo: String,
    goals: Number
  },
  venue: String,
  referee: String,
  statistics: Object,
  lineups: Object,
  events: Array,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default mongoose.model('Match', matchSchema)