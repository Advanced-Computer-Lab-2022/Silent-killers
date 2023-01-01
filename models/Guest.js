const mongoose = require('mongoose')

const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema;
const GuestSchema = new mongoose.Schema({
    Country: {
        type: String,
        required: false},
        Username:{
            type:String,
            required:true,},
    Password:{
        type:String,
        required:true,
    },
    Firstname:{
        type:String,
        required:true,
    },
    Lastname:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
        required:true,
    },
    Type:{
        type:Number,
        default:0 //0=individual 1=corporate
    }
}, { timestamps: true })

module.exports = mongoose.model('Guest', GuestSchema)