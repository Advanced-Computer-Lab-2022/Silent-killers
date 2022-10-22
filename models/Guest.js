const mongoose = require('mongoose')

const GuestSchema = new mongoose.Schema({
    Country: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Guest', GuestSchema)