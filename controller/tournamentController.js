const Tournament = require('../model/Tournament')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')
const { find } = require('../model/Tournament')

const createTournament = async (req, res)=>{
    
    const tournament = await Tournament.create(req.body)
    console.log(tournament)

    if(!tournament)
        throw new BadRequestError("Niepoprawne dane")
    res.status(StatusCodes.CREATED).send("tournament created")
}

const getTournament = async ( req, res)=>{
    const name = req.params.name
    const tournament = await Tournament.findOne({name:name})
    if(!tournament)
        throw new NotFoundError(`Nie można odnaleźć turnieju o nazwie: ${name}`)
    res.status(StatusCodes.OK).json(tournament)
}
const getTournaments = async (req, res)=>{
    const tournaments = await Tournament.find()
    res.status(StatusCodes.OK).json(tournaments)
}


module.exports = {
    createTournament,
    getTournament,
    getTournaments
}