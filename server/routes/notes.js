const express = require('express')
const { v4: uuidv4 } = require('uuid')
const router = express.Router()
// const auth = require('../../middleware/auth')

// Note Model
const Note = require('../models/NoteModel')

router.get('/:id', (req, res) => {
    Note.find({ userId: req.params.id })
        .sort({ createDate: -1 })
        .then(items => res.json(items))
})

router.post('/', (req, res) => {
    let uuid = uuidv4() 
    const newNote = new Note({
        userId: req.body.userId,
        uuid: uuid,
        restaurantName: req.body.restaurantName,
        img: req.body.img,
        note: req.body.note
    })
    newNote.save().then(note => res.json(note))
})

router.delete('/:id', (req, res) => {
    Note.findOneAndDelete({ uuid: req.params.id })
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router