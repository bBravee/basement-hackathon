require('dotenv').config({})
require('express-async-errors');
const {StatusCodes} = require('http-status-codes')
const express = require("express")
const app = express()
const path = require('path')
const cors = require('cors')
// middleware
const errorHandlerMiddleware = require('./middleware/errorHandler');
const notFoundMiddleware = require('./middleware/notFound');
const authenticationMiddleware = require('./middleware/authentication')
app.use(express.json())
app.use(cors())


// routes
const playerRouter = require('./routes/playerRoutes')
const tournamentRouter = require('./routes/tournamentRoutes')
const participationRouter = require('./routes/participationRoutes')
const gameRouter = require('./routes/gameRoutes')

app.use('/api/v1/player', playerRouter)
// app.use(authenticationMiddleware)
app.use('/api/v1/tournament', tournamentRouter)
app.use('/api/v1/participation', participationRouter)
app.use('/api/v1/game', gameRouter)

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const port = process.env.PORT || 5000
const connectDB = require("./database/connect")
const start = async ()=>{
    try {
        await connectDB(process.env.CONNECTION_STRING)
        console.log();
        app.listen(port, () => [
            console.log(`app listening on port ${port}`)
        ])        
    } catch (error) {
        console.error(error);
    }
}
start()

