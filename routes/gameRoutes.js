const express = require("express");
const router = express.Router();

const {
    createGame,
    updateGame,
    getGames
} = require('../controller/gameController');



router.route('/')
    .post(createGame)
    .get(getGames)

router.route('/:id')
    .patch(updateGame)

    
module.exports = router