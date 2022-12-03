const express = require('express')
const router = express.Router()

const {
    getPlayer,
    getPlayers,
    register,
    login
} = require('../controller/playerController')


router.route('/')
    .get(getPlayers)
    .post(register)
    
router.route('/login')
    .post(login)

router.route('/:id')
    .get(getPlayer)


module.exports = router