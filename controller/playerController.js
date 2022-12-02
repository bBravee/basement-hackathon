const Player = require('../model/Player')
const {StatusCodes} = require('http-status-codes')
const {
    BadRequestError,
    NotFoundError
} = require('../errors')

const createPlayer = async (req, res)=>{

    const player = await Player.create(req.body)
    console.log(player)
    if(!player)
        throw new BadRequestError("Niepoprawne dane")

    res.status(StatusCodes.CREATED).json(player)
}
const getPlayers = async (req, res)=>{
    const players = await Player.find()
    console.log(players);
    res.status(StatusCodes.OK).json(players)
}
const getPlayer = async (req, res)=>{
    const player = await Player.findById(req.params.id)
    console.log(player)
    if(!player){
        console.log("smt")
        throw new NotFoundError(`Gracz o id:${req.params.id} nie istnieje`)
    }

    res.status(StatusCodes.OK).json(player)
}

module.exports = {
    getPlayer,
    getPlayers,
    createPlayer
}