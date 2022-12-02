const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Wprowadź imię"],
    trim: true,
  },
  last_name: {
    type: String,
    required: [true, "Wprowadź nazwisko"],
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Wprowadź hasło"],
  },
});



module.exports = mongoose.model('Player', PlayerSchema)