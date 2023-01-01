const mongoose = require('mongoose')

const Schema = mongoose.Schema
const AdminSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Type : {
        type : Number,
        required : false
    }
    }, { timestamps: true })

module.exports = mongoose.model('Admin', AdminSchema)