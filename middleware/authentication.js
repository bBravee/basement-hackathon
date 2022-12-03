const Player = require('../model/Player')
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Autentykacja nie powiodła się')
  }
  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    // attach the user to the job routes
    req.player = { player_id: payload.player_id, name: payload.name }
    next()
  } catch (error) {
    throw new UnauthenticatedError('Autentykacja nie powiodła się ')
  }
}

module.exports = auth