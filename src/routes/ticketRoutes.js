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

/**
 * @swagger
 * /api/tickets:
 *   post:
 *     summary: Create a new ticket
 *     tags: [Tickets]
 *     responses:
 *       201:
 *         description: Ticket created successfully
 */
router.post('/', protect, createTicket)

/**
 * @swagger
 * /api/tickets:
 *   get:
 *     summary: Get all tickets
 *     tags: [Tickets]
 *     responses:
 *       200:
 *         description: List of tickets
 */
router.get('/', protect, getTickets)

/**
 * @swagger
 * /api/tickets/{id}:
 *   get:
 *     summary: Get ticket by id
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ticket found
 */
router.get('/:id', protect, getTicketById)

/**
 * @swagger
 * /api/tickets/{id}:
 *   put:
 *     summary: Update ticket by id
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ticket updated successfully
 */
router.put('/:id', protect, updateTicket)

/**
 * @swagger
 * /api/tickets/{id}/close:
 *   patch:
 *     summary: Close a ticket
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ticket closed successfully
 */
router.patch('/:id/close', protect, closeTicket)

/**
 * @swagger
 * /api/tickets/{id}/reopen:
 *   patch:
 *     summary: Reopen a ticket
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ticket reopened successfully
 */
router.patch('/:id/reopen', protect, reopenTicket)

module.exports = router