require('dotenv').config({})
require('express-async-errors');
const {StatusCodes} = require('http-status-codes')
const express = require("express")
const app = express()
const path = require('path')

// middleware
const errorHandlerMiddleware = require('./middleware/errorHandler');
const notFoundMiddleware = require('./middleware/notFound');
app.use(express.json())



// routes
const playerRouter = require('./routes/playerRoutes')
const tournamentRouter = require('./routes/tournamentRoutes')
const participationRouter = require('./routes/participationRoutes')

app.use('/api/v1/player', playerRouter)
app.use('/api/v1/tournament', tournamentRouter)
app.use('/api/v1/participation', participationRouter)

app.get('/', (req, res)=>{
    res.status(StatusCodes.OK).send("piwnica")
})



app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)



const port = process.env.PORT || 3000
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

