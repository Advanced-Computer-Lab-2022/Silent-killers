const mongoose = require('mongoose')

const IndividualTraineeSchema = new mongoose.Schema({
Username: {
    type: String,
    required: true
},
Password: {
    type: String,
    required: true
},
Country: { 
    type: String,
    required: false
}
})

module.exports = mongoose.model('IndividualTrainee', IndividualTraineeSchema)