import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  teamId: { type: Number, required: true, unique: true },
  name: String,
  code: String,
  country: String,
  founded: Number,
  national: Boolean,
  logo: String,
  venue: {
    name: String,
    address: String,
    city: String,
    capacity: Number
  },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Team', teamSchema)