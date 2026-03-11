const bcrypt = require('bcryptjs')
const User = require('../models/User')
const generateToken = require('../utils/generateToken')

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    })

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    })
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    })
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({ message: 'Server error' })
  }
}

module.exports = {
  registerUser,
  loginUser,
  getMe
}