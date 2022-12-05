const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CourseSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    INSid: { type: mongoose.Types.ObjectId,
         ref: 'Instructor',
          required: false },
    InstructorID: {
        type : Number,
        required : false
    },
    PreviewVideo:{
        type: String,
        required: false
    },
    InstructorName: {
        type:String,
        required : false
    },
    TotalHoursOfCourse: {
        type: Number,
        required: false
    },
    Rating:{
        type: Number,
        required: false
    },
    Subtitles:{
        type:String,
        required:true
    },
    SubtitlesDES:{
        type:String,
        required:false
    },
    NoRating:{
        type: Number,
        required:false
    },
    Subject:{
        type: String,
        required : false
    },
    Summary:{
        type:String,
        required:false
    },
    Exercises:{
        type:Number,
        required:false
    },
    Price:{
        type:String,
        required:true
    },
    TotalHoursOfEachSubtitle: {
        type: Number,
        required: false
    },
    VideoLink:{
        type: String,
        required : false
    },
    Reviews:{
        type : String
    },
    Discount:{
        type : Number
    },
    NoOfDays:{
        type : Number
    }
    
    }, { timestamps: true })

    module.exports = mongoose.model('Course', CourseSchema)