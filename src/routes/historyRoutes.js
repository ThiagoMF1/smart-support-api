const express = require('express')
const { getTicketHistory } = require('../controllers/historyController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

/**
 * @swagger
 * /api/history/{ticketId}:
 *   get:
 *     summary: Get ticket history
 *     tags: [History]
 *     parameters:
 *       - in: path
 *         name: ticketId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ticket history
 */
router.get('/:ticketId', protect, getTicketHistory)

module.exports = router