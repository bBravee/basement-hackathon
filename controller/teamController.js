const Team = require("../model/team")
const { StatusCodes } = require('http-status-codes')

const getTeams = async(req, res)=>{

    const teams = await Team.find()
    console.log(teams);
    res.status(StatusCodes.OK).send(teams)
}

const createTeam = async (req, res)=>{
    const team = await Team.create(req.body)

    res.status(StatusCodes.CREATED).send("created")
}

module.exports= {
    getTeams,
    createTeam
}

