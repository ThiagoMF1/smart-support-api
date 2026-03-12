const History = require('../models/History')
const Ticket = require('../models/Ticket')

const getTicketHistory = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.ticketId)

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }

    const history = await History.find({ ticket: req.params.ticketId })
      .populate('changedBy', 'name email role')
      .sort({ createdAt: -1 })

    return res.status(200).json(history)
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

module.exports = {
  getTicketHistory
}