const express = require('express')
const router = express.Router()

const {
    getTournament,
    createTournament,
    getTournaments
} = require('../controller/tournamentController')

router.route('/')
    .post(createTournament)
    .get(getTournaments)

router.route('/:name')
    .get(getTournament)
    
module.exports = router