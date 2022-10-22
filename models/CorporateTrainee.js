const mongoose = require('mongoose')

const CorporateTraineeSchema = new mongoose.schema({
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
}
})

module.exports = mongoose.model('CorporateTrainee', CorporateTraineeSchema)