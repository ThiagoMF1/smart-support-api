const express = require('express')
const {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  closeTicket,
  reopenTicket
} = require('../controllers/ticketController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/', protect, createTicket)
router.get('/', protect, getTickets)
router.get('/:id', protect, getTicketById)
router.put('/:id', protect, updateTicket)
router.patch('/:id/close', protect, closeTicket)
router.patch('/:id/reopen', protect, reopenTicket)

module.exports = router