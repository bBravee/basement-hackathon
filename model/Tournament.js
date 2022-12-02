const mongoose = require("mongoose")

const TournamentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Wproawadź nazwę turnieju'],
        unique: true
    },
    amount_of_players : {
        type: Number,
        required: [true, 'Wprowadź ilość graczy ']
    },
    start_date : {
        type: Date,
        required: [true, "Wprowadź date rozpoczęcia turnieju"]
    },
    end_date : {
        type: Date
    },
    tournament_type:{
        type: String,
        enum:['play-off', 'rankingowy'],
        required: [true, "musisz wybrać typ turnieju"]
    },
    judge_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Player'
    }
    
})

module.exports = mongoose.model('Tournament', TournamentSchema)
