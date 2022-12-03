const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')
const Game = require('../model/Game')
const Participation = require('../model/Participation')
const Player = require('../model/Player')
const Tournament = require('../model/Tournament')

const createGame = async (req, res)=>{
    
    generateGames(req.params.id)
    res.status(StatusCodes.OK).send("Create")
}

const getGames = async ( req, res)=>{
    const tournament_id = req.params.id
    const games = await 
        Game.find({tournament_id: tournament_id})
            .populate({
                path:'player_1_id',
                path:'player_2_id'
            })

    res.status(StatusCodes.OK).json(games)
}



const updateGame = async (req, res)=>{
    const game_id = req.params.id

    const game = await Game.findByIdAndUpdate(game_id)
    if(!game)
        throw new NotFoundError(`Nie można odnaleść gry o id: ${game_id}`)
    res.status(StatusCodes.OK).send("updateGame")
}

const randInt = (max)=>{
    return Math.floor(Math.random()*max)
 }
 
 const drawPlayers = async (tournament)=>{
 
    let players = await Participation.find({tournament_id:tournament._id})
 
    let bracket = new Array(tournament.amount_of_players)
 
    let max = tournament.amount_of_players
    for(let i=0; i<tournament.amount_of_players; ++i){
        const rand = randInt(max)
        bracket[i] = players[rand]
        bracket = bracket.slice(rand,rand) 
        max--
    }
    return bracket
}

const generateGames = async (tournament_id) =>{

    


    const tournament = await Tournament.findById(tournament_id)
    const players = await Player.find({tournament_id:tournament_id})
    // if(!tournament)
    //     throw new NotFoundError(`Nie istnieje turniej o id:${tournament_id}`)
    // let power = 1;
    // for(let i=1; i<tournament.amount_of_players; i*=2){
    //     power++;
    // }
    // const players = drawPlayers(tournament)
    for(let i=0; i<tournament.amount_of_players/2; ++i){
        console.log("prooosze")
        const game = await Game.create({
            tournament_id: tournament_id,
            player_1_id: players[i],
            player_2_id: players[i+1],
            order:i+1
        })
        console.log(game);
        if(!game)
            throw new BadRequestError("Nie można wylosować przeciwników")
    }

}



module.exports = {
    createGame,
    getGames,
    updateGame
}