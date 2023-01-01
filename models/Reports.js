const mongoose = require('mongoose')

const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema;

const ReportsSchema = new mongoose.Schema({
    Course: {
        type: String,
        required: true
    },
    Problem: {
        type: String,
        required: true
    },
    Status: {
        type: String, 
        required: false
    },
    INSid: { type: mongoose.Types.ObjectId,
        ref: 'Instructor',
        required: false
    },
    CTid: { type: mongoose.Types.ObjectId,
        ref: 'CorporateTrainee',
        required: false
    },
    ITid: { type: mongoose.Types.ObjectId,
        ref: 'IndividualTrainee',
        required: false
    },   View:{
        type:String,
        required: false
    },CourseID: { type: mongoose.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    Comment:{
        type: String, 
        required: false
    }
    }, { timestamps: true })

    module.exports = mongoose.model('Reports', ReportsSchema)