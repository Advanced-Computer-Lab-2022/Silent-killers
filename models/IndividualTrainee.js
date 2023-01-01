const mongoose = require('mongoose')

const Schema = mongoose.Schema

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
    } ,
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
    Type : {
        type : Number,
        required : false
    }
    }, { timestamps: true })

module.exports = mongoose.model('IndividualTrainee', IndividualTraineeSchema)