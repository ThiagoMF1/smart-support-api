const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./config/swagger')
const authRoutes = require('./routes/authRoutes')
const ticketRoutes = require('./routes/ticketRoutes')
const commentRoutes = require('./routes/commentRoutes')
const historyRoutes = require('./routes/historyRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Smart Support API running' })
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/api/auth', authRoutes)
app.use('/api/tickets', ticketRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/history', historyRoutes)
app.use('/api/dashboard', dashboardRoutes)

module.exports = app