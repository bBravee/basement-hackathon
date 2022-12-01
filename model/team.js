const mongoose = require("mongoose")

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Wproawadź nazwę drużyny']
    },
    activity : {
        type: String,
        required: [true, 'Wprowadź nazwy aktywności']
    }
} , {timespamps:true})

module.exports = mongoose.model('Team', TeamSchema)
