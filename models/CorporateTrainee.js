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
},
Course:{
    title:String,
    subject:String,
    instructor:String,
    required: true

}
})

module.exports = mongoose.model('CorporateTrainee', CorporateTraineeSchema)