const mongoose = require('mongoose')

const GuestSchema = new mongoose.Schema({
    Country: {
        type: String,
        required: false
    },Course:{
        title:String,
        subject:String,
        instructor:String,
        required: true
    
    }
})

module.exports = mongoose.model('Guest', GuestSchema)