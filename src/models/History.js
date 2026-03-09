const mongoose = require('mongoose')

const historySchema = new mongoose.Schema(
  {
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket',
      required: true
    },
    field: {
      type: String,
      required: true
    },
    oldValue: {
      type: String
    },
    newValue: {
      type: String
    },
    changedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('History', historySchema)