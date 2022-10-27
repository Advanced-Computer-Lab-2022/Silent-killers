const mongoose = require('mongoose')

const Schema = mongoose.Schema
const GuestSchema = new mongoose.Schema({
    Country: {
        type: String,
        required: false
    
}}, { timestamps: true })

module.exports = mongoose.model('Guest', GuestSchema)