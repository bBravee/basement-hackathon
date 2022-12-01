require('dotenv').config({})

const express = require("express")
const app = express()
const path = require('path')

// middleware

app.use(express.json())



// routes
const teamRoutes = require('./routes/teamRouter')
app.use('/api/v1/team', teamRoutes)

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/view/index.html`)
} )

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

