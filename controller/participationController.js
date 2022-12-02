const Participation = require('../model/Participation')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')

const getParticipations = async (req, res)=>{
    const tournament_id = req.params.id
    const participations = 
        await Participation
            .find({ tournament_id : tournament_id})
            .populate({
                path:'player_id',
                strictPopulate:false
            })


    if(!participations)
        throw new NotFoundError(`Nie można znaleźć turnieju o id: ${tournament_id}`)

    res.status(StatusCodes.OK).json(participations)
}

const createParticipation = async (req, res)=>{

    const participation = await Participation.create(req.body)

    if(!participation)
        throw new BadRequestError('Niepoprawne dane')

    res.status(StatusCodes.CREATED).json(participation)
}

const deleteParticipation = async (req, res)=>{
    const participation_id= req.params.id
    const participation = await Participation.findByIdAndDelete(participation_id)

    if(!participation)
        throw new NotFoundError(`Nie można odnaleźć uczestnika o id: ${participation_id}`)

    res.status(StatusCodes.OK).json(participation)
}

module.exports = {
    getParticipations,
    createParticipation,
    deleteParticipation
}