const express = require('express')
const router = express.Router()

const {
    getTournament,
    createTournament,
    getTournaments,
    updateTournament
} = require('../controller/tournamentController')

router.route('/')
    .post(createTournament)
    .get(getTournaments)

router.route('/:id')
    .get(getTournament)
    .patch(updateTournament)
    
module.exports = router