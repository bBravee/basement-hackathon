const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')
const Game = require('../model/Game')

const createGame = async (req, res)=>{
    const game = await Game.create(req.body)

    if(!game)
        throw new BadRequestError()
    res.status(StatusCodes.OK).send("Create")
}

const getGames = async ( req, res)=>{
    const tournament_id = req.params.id
    const games = await Game.find({tournament_id: tournament_id})
    res.status(StatusCodes.OK).json(games)
}

const updateGame = async (req, res)=>{
    const game_id = req.params.id

    const game = await Game.findByIdAndUpdate(game_id)
    if(!game)
        throw new NotFoundError(`Nie można odnaleść gry o id: ${game_id}`)
    res.status(StatusCodes.OK).send("updateGame")
}

const generateGames = async (tournament_id) =>{
    
}



module.exports = {
    createGame,
    getGames,
    updateGame
}