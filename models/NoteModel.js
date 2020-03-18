const mongoose = require('mongoose')

const Schema = mongoose.Schema

const NoteSchema = new Schema({
  userId: { type: String, required: true },
  uuid: { type: String, required: true },
  restaurantName: { type: String, required: true },
  img: { type: String, required: true }, 
  note: { type: String, required: true }, 
  createDate : { type: Date, required: true, default: Date.now}
})

const Note = mongoose.model('note', NoteSchema) // The name inside the quotes is the singular version of the table name.

module.exports = Note