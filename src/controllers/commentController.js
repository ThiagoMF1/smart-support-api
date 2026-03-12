const Comment = require('../models/Comment')
const Ticket = require('../models/Ticket')

const addComment = async (req, res) => {
  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({ message: 'Message is required' })
    }

    const ticket = await Ticket.findById(req.params.ticketId)

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }

    const comment = await Comment.create({
      ticket: req.params.ticketId,
      author: req.user._id,
      message
    })

    const populatedComment = await Comment.findById(comment._id)
      .populate('author', 'name email role')
      .populate('ticket', 'title status')

    return res.status(201).json(populatedComment)
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

const getCommentsByTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.ticketId)

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }

    const comments = await Comment.find({ ticket: req.params.ticketId })
      .populate('author', 'name email role')
      .sort({ createdAt: -1 })

    return res.status(200).json(comments)
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

module.exports = {
  addComment,
  getCommentsByTicket
}