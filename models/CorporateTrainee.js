const mongoose = require('mongoose')

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
    required: true
},
Country: {
    type: String,
    required: false
}})

module.exports = mongoose.model('CorporateTrainee', CorporateTraineeSchema)