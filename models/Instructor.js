const mongoose = require('mongoose')

const InstructorSchema = new mongoose.schema({
Username: {
    type: String,
    required: true
},
Password: {
    type: String,
    required: true
}
})

module.exports = mongoose.model('Instructor', InstructorSchema)