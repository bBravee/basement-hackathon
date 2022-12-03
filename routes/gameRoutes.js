const express = require("express");
const router = express.Router();

const {
    createGame,
    updateGame,
    getGames
} = require('../controller/gameController');






router.route('/:id')
    .patch(updateGame)
    .post(createGame)
    .get(getGames)
    
module.exports = router