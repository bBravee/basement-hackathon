const express = require("express");
const router = express.Router();

const {
    getParticipations,
    createParticipation,
    deleteParticipation
}= require('../controller/participationController')

router.route('/')
    .post(createParticipation)

router.route('/:id')
    .delete(deleteParticipation)
    .get(getParticipations)

module.exports = router