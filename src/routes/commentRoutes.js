const express = require('express')
const { addComment, getCommentsByTicket } = require('../controllers/commentController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/:ticketId', protect, addComment)
router.get('/:ticketId', protect, getCommentsByTicket)

module.exports = router