const Ticket = require('../models/Ticket')
const History = require('../models/History')
const { calculatePriority, isValidStatusTransition } = require('../services/ticketService')

const createTicket = async (req, res) => {
  try {
    const { title, description, category, impact } = req.body

    if (!title || !description || !category || !impact) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const priority = calculatePriority(category, impact, description)

    const ticket = await Ticket.create({
      title,
      description,
      category,
      impact,
      priority,
      createdBy: req.user._id
    })

    return res.status(201).json(ticket)
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate('createdBy', 'name email role')
      .sort({ createdAt: -1 })

    return res.status(200).json(tickets)
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id).populate('createdBy', 'name email role')

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }

    return res.status(200).json(ticket)
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

const updateTicket = async (req, res) => {
  try {
    const { title, description, category, impact, status } = req.body

    const ticket = await Ticket.findById(req.params.id)

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }

    if (ticket.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' })
    }

    const oldPriority = ticket.priority
    const oldStatus = ticket.status

    if (status && status !== ticket.status) {
      const canChangeStatus = isValidStatusTransition(ticket.status, status)

      if (!canChangeStatus) {
        return res.status(400).json({ message: 'Invalid status transition' })
      }

      ticket.status = status

      await History.create({
        ticket: ticket._id,
        field: 'status',
        oldValue: oldStatus,
        newValue: status,
        changedBy: req.user._id
      })
    }

    if (title) {
      ticket.title = title
    }

    if (description) {
      ticket.description = description
    }

    if (category) {
      ticket.category = category
    }

    if (impact) {
      ticket.impact = impact
    }

    ticket.priority = calculatePriority(ticket.category, ticket.impact, ticket.description)

    if (oldPriority !== ticket.priority) {
      await History.create({
        ticket: ticket._id,
        field: 'priority',
        oldValue: oldPriority,
        newValue: ticket.priority,
        changedBy: req.user._id
      })
    }

    const updatedTicket = await ticket.save()

    return res.status(200).json(updatedTicket)
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

const closeTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }

    if (ticket.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' })
    }

    const oldStatus = ticket.status
    ticket.status = 'closed'

    await History.create({
      ticket: ticket._id,
      field: 'status',
      oldValue: oldStatus,
      newValue: 'closed',
      changedBy: req.user._id
    })

    const updatedTicket = await ticket.save()

    return res.status(200).json(updatedTicket)
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

const reopenTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' })
    }

    if (ticket.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' })
    }

    const oldStatus = ticket.status
    ticket.status = 'open'

    await History.create({
      ticket: ticket._id,
      field: 'status',
      oldValue: oldStatus,
      newValue: 'open',
      changedBy: req.user._id
    })

    const updatedTicket = await ticket.save()

    return res.status(200).json(updatedTicket)
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

module.exports = {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  closeTicket,
  reopenTicket
}