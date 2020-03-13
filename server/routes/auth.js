const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const User = require('../models/UserModel')

// Auth user, public
router.post('/', (req, res) => {
  const { email, password } = req.body

  if(!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' })
  }

  User.findOne({ email })
    .then(user => {
      if(!user) return res.status(400).json({ msg: 'User Does not exist' })

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })

          jwt.sign(
            { id: user.id },
            process.env.jwtSecret,
            { expiresIn: 3600 },
            (err, token) => {
              if(err) throw err
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              })
            }
          )
        })
    })
})

// take the token and get user data, constantly validate that the user is authenticated, Private
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
})

module.exports = router
