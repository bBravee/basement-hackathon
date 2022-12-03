const mongoose = require('mongoose')

const GameSchema = mongoose.Schema({
    order:{
        type:Number,
        requierd:[true, "Numer gry jest wymagany"]
    },
    player_1_id:{
        type: mongoose.Types.ObjectId,
        ref:'Player'
    },
    player_2_id:{
        type: mongoose.Types.ObjectId,
        ref:'Player'
    },
    player_1_score :{
        type:Number
    },
    player_2_score :{
        type:Number
    },
    tournament_id:{
        type: mongoose.Types.ObjectId,
        ref:'Tournament',
        required: [true, "Id turnieju jest wymagane"]
    }
})

module.exports = mongoose.model('Game', GameSchema)