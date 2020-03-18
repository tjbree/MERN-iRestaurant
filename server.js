const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('Connected with MongoDB.'))
    .catch(err => console.log(err))

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully.')
})

const notesRouter = require('./routes/notes')
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')

app.use('/notes', notesRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)


// Serve static resource if it is in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server has started on port ${port}`))