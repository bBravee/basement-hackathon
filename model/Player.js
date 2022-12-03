const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
  nickname:{
    type:String,
    required: [true,'Nazwa gracza jest wymagana']
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

PlayerSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
  
PlayerSchema.methods.createJWT = function () {
    return jwt.sign(
      { player_id: this._id, nickname: this.nickname },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_LIFETIME,
      }
    )
  }
  
PlayerSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password)
    return isMatch
}

module.exports = mongoose.model('Player', PlayerSchema)