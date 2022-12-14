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
    const id = req.params.id
    const tournament = await Tournament.findById(id)
    if(!tournament)
        throw new NotFoundError(`Nie można odnaleźć turnieju o id: ${id}`)
    res.status(StatusCodes.OK).json(tournament)
}
const getTournaments = async (req, res)=>{
    const tournaments = await Tournament.find()
    res.status(StatusCodes.OK).json(tournaments)
}

const updateTournament = async (req, res)=>{
    const id = req.params.id

    const tourenament = await Tournament.findByIdAndUpdate(id, {...req.body})
    if(!tourenament)
        throw new BadRequestError(`Nie można zaktualizować turnieju o id: ${id}`)

    res.status(StatusCodes.OK).send()
}


module.exports = {
    createTournament,
    getTournament,
    getTournaments,
    updateTournament
}