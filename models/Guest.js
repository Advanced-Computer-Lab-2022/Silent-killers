const mongoose = require('mongoose')

const GuestSchema = new mongoose.Schema({
    Country: {
        type: String,
        required: false
    },Course:{
        title:String,
        subject:String,
        instructor:String,
        subtitles:String,
        totalHoursOfEachSubtitle:Number,
        exercises:String,
        totalHoursOfCourse:Number,
        price:Number,
        required: true

    }
})

module.exports = mongoose.model('Guest', GuestSchema)