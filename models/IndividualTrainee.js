const mongoose = require('mongoose')

const IndividualTraineeSchema = new mongoose.schema({
Username: {
    type: String,
    required: true
},
Password: {
    type: String,
    required: true
}
})

module.exports = mongoose.model('IndividualTrainee', IndivisualTraineeSchema)