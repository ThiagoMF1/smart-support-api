const calculatePriority = (category, impact, description) => {
  const text = description.toLowerCase()

  const criticalKeywords = ['server down', 'database offline', 'payment error', 'system outage']
  const highKeywords = ['slow', 'bug', 'failed', 'error']

  if (criticalKeywords.some((keyword) => text.includes(keyword))) {
    return 'critical'
  }

  if (impact === 'high' && category === 'infrastructure') {
    return 'high'
  }

  if (highKeywords.some((keyword) => text.includes(keyword))) {
    return 'high'
  }

  if (impact === 'medium') {
    return 'medium'
  }

  return 'low'
}

const isValidStatusTransition = (currentStatus, newStatus) => {
  const allowedTransitions = {
    open: ['in_progress', 'closed'],
    in_progress: ['waiting_customer', 'resolved', 'closed'],
    waiting_customer: ['in_progress', 'resolved', 'closed'],
    resolved: ['closed', 'open'],
    closed: ['open']
  }

  return allowedTransitions[currentStatus]?.includes(newStatus)
}

module.exports = {
  calculatePriority,
  isValidStatusTransition
}