const express = require('express')
const { addComment, getCommentsByTicket } = require('../controllers/commentController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

/**
 * @swagger
 * /api/comments/{ticketId}:
 *   post:
 *     summary: Add comment to a ticket
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: ticketId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Comment created successfully
 */
router.post('/:ticketId', protect, addComment)

/**
 * @swagger
 * /api/comments/{ticketId}:
 *   get:
 *     summary: Get comments by ticket
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: ticketId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of comments
 */
router.get('/:ticketId', protect, getCommentsByTicket)

module.exports = router