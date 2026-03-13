const express = require('express')
const { getDashboardData } = require('../controllers/dashboardController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: Get dashboard data
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Dashboard data
 */
router.get('/', protect, getDashboardData)

module.exports = router