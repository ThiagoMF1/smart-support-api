const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const ticketRoutes = require('./routes/ticketRoutes')
const commentRoutes = require('./routes/commentRoutes')
const historyRoutes = require('./routes/historyRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Smart Support API running' })
})

app.use('/api/auth', authRoutes)
app.use('/api/tickets', ticketRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/history', historyRoutes)

module.exports = app