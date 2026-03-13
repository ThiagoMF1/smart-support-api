const Ticket = require('../models/Ticket')

const getDashboardData = async (req, res) => {
  try {
    const openTickets = await Ticket.countDocuments({ status: 'open' })
    const resolvedTickets = await Ticket.countDocuments({ status: 'resolved' })
    const criticalTickets = await Ticket.countDocuments({ priority: 'critical' })

    const ticketsByCategory = await Ticket.aggregate([
      {
        $group: {
          _id: '$category',
          total: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          category: '$_id',
          total: 1
        }
      }
    ])

    return res.status(200).json({
      openTickets,
      resolvedTickets,
      criticalTickets,
      ticketsByCategory
    })
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

module.exports = {
  getDashboardData
}