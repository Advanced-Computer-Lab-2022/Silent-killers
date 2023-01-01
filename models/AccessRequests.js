const { string } = require('joi')
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const AccessRequestsSchema = new mongoose.Schema({
    TraineeID: { type: mongoose.Types.ObjectId,
        ref: 'CorporateTrainee',
        required: true
    },
    CourseID: {
        type: mongoose.Types.ObjectId,
        ref : 'Course',
        required: true
    },
    Status: {
        type: String,
        required: true
    }
    }, { timestamps: true })

module.exports = mongoose.model('AccessRequest', AccessRequestsSchema)