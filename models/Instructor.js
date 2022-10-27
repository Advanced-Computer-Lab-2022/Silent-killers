const mongoose = require('mongoose')

const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema;

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
    }, { timestamps: true })

    module.exports = mongoose.model('Instructor', InstructorSchema)