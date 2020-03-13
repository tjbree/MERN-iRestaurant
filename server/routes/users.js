const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

require('dotenv').config()
const jwt = require('jsonwebtoken')


// User Model
const User = require('../models/UserModel')


// Register new user
router.post('/', (req, res) => {
  const { name, email, password } = req.body

  if(!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields.' })
  }

  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User already exists.' })
      const newUser = new User({
        name,
        email,
        password
      })

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err
          newUser.password = hash
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id }, // this is the payload, userId will be included in the token
                process.env.jwtSecret,
                { expiresIn: 3600 },
                (err, token) => {
                  if(err) throw err
                  res.json({
                    token, // this token is for visiting private route
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
    })
})

module.exports = router