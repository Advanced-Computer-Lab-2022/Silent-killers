const mongoose = require('mongoose')

const InstructorSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Instructor', InstructorSchema)