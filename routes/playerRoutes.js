const express = require('express')
const router = express.Router()

const {
    getPlayer,
    getPlayers,
    createPlayer
} = require('../controller/playerController')


router.route('/')
    .get(getPlayers)
    .post(createPlayer)

router.route('/:id')
    .get(getPlayer)


module.exports = router