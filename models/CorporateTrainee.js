const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CorporateTraineeSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }, 
    Corporate: {
        type: String,
        required: false
    },
    Country: {
        type: String,
        required: false
    },
    
    }, { timestamps: true })

module.exports = mongoose.model('CorporateTrainee', CorporateTraineeSchema)