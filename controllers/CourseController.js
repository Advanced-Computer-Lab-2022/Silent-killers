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

const filterRate = async(req,res) => {

    const {Rating} = req.body;
    try{
    const x = await Course.find({ Rating:Rating})
        console.log(Rating)
   
    res.status(200).json(x)
 
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const filterSubject= async(req,res) => {

    const {subject} = req.body;
    try{
    const x = await Course.find({ Subject:subject})

   
    res.status(200).json(x)
 
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const filterPrice = async(req,res) => {

    const {Price} = req.body;
    try{
    const x = await Course.find({ Price:Price})

   
    res.status(200).json(x)
 
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
// const editCourse = async(req, res) => {
//     try{
//         const{
//             Title,
//             InstructorName,
//             TotalHoursOfCourse,
//             Rating,
//             Subtitles,
//             Subject,
//             Summary,
//             Exercises,
//             Price,
//             TotalHoursOfEachSubtitle
//         } =req.body;
//         console.log("Req Body");
//         const course = await Course.findById(req.params.id);
//         if(course)
//         {
//         course.Title = Title;
//         course.InstructorName = InstructorName;
//         course.TotalHoursOfCourse = TotalHoursOfCourse;
//         course.Rating = Rating;
//         course.Subtitles = Subtitles;
//         course.Subject = Subject;
//         course.Summary = Summary;
//         course.Exercises = Exercises;
//         course.Price = Price;
//         course.TotalHoursOfEachSubtitle = TotalHoursOfEachSubtitle;
//         }
//         const editCourse = await course.save();
//         res.json(editCourse);
//     } catch(err) {
//         console.log("Error");
//         return res.status(500).json({msg: err.message});
//     }   
// }
const editcourse = async(req, res) => {
    const {title,InstructorName,totalhrsofcourse,rating,subtitles,subject,summary,exercises,price,totalhrssubtitle}=req.body
    const course=await Course.findByIdAndUpdate(req.params.id,{Title:title,InstructorName:InstructorName,TotalHoursOfCourse:totalhrsofcourse,Rating:rating,Subtitles : subtitles,Subject:subject,Summary : summary , Exercises:exercises , Price:price,TotalHoursOfEachSubtitle : totalhrssubtitle})
    res.status(200).json(course)}


module.exports = {getCourses,getCoursesPrice,filterRate,editcourse,filterRate,filterPrice,filterSubject}