const mongoose = require('mongoose')

const ParticipationSchema = mongoose.Schema({
    player_id : {
        type: mongoose.Types.ObjectId,
        required: [true, "Id gracza jest wymagane"],
        ref:'Player'
    },
    tournament_id:{
        type : mongoose.Types.ObjectId,
        required: [true, "Id turnieju jest wymagane"],
        ref: 'Tournament'
    }
})

module.exports = mongoose.model('Participation', ParticipationSchema)