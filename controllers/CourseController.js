const Course = require('../models/Course')
const mongoose = require('mongoose')

const getCourses = async (req, res) => {
    const courses = await Course.find({}).sort({createdAt: -1})
  
    for (let index = 0; index < courses.length; index++) {
        const element = courses[index];
        console.log(element.id);
    }
    res.status(200).json(courses)
}
const getCoursesPrice = async (req, res) => {
    const courses = await Course.find({}).sort({createdAt: -1})
  
    for (let index = 0; index < courses.length; index++) {
        const element = courses[index];
        console.log(element.id);
    }
    res.status(200).json(courses.Price)
}
const addCourse = async(req,res) => {
   
    const{Title,Subtitles,Price,Summary,INSid} = req.body;
    try{
        const course = await Course.create({Title,Subtitles,Price,Summary,INSid});
        res.status(200).json(course)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
const filterRate = async(req,res) => {
    /*
    1- get the author id from the request query
    2- find all the blogs that have the same author id
    3- send the blogs as a response
    */
    const Rating = req.body;
    // check if userId is not empty
    try{
        //Course.find
    const result = await  Course.find({TotalHoursOfCourses:Rating});
    res.status(200).json(result)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {getCourses,addCourse,getCoursesPrice,filterRate}