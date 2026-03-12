const express = require('express')
const { getTicketHistory } = require('../controllers/historyController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/:ticketId', protect, getTicketHistory)

module.exports = router