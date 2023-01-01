const mongoose = require('mongoose')

const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema;

const InstructorSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    InstructorID: {
        type : Number,
        required : false
    },
    Password: {
        type: String,
        required: true
    },
    Country: {
        type: String, 
        required: false
    },
    Contract:{
        type: String
    },
    ContractStatus: {
        type : String,
    },
    Rating:{
        Type: Number
    },
    Reviews:{
        Type: String
    },
    Biography: {
        type: String,
        required : false
    },
    Email: {
        type : String,
        required : false
    },
    NoRating:{
        type: Number,
        required:false
    },
    Type : {
        type : Number,
        required : false
        
    }
    }, { timestamps: true })

    module.exports = mongoose.model('Instructor', InstructorSchema)