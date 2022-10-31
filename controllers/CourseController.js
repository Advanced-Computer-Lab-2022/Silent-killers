const Course = require('../models/Course')
const mongoose = require('mongoose')
const asyncHandler = (controllerfunction) => (req, res, next) =>
  Promise.resolve(controllerfunction(req, res, next)).catch(next);

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

// const filterRate = async(req,res) => {

//     const {Rating} = req.body;
//     try{
//     const x = await Course.find({ Rating:Rating})
//         console.log(Rating)
   
//     res.status(200).json(x)
 
//     }catch(error){
//         res.status(400).json({error:error.message})
//     }
// }

// const filterSubject= async(req,res) => {

//     const {subject} = req.body;
//     const {Rating} = req.body;
//     if(subject){
//     const x = await Course.find({ Subject:subject})
//     }
   
//     res.status(200).json(x)
 
//     }
//     const filtersubjectorrating = async (req, res) => {
//         const {subject} = req.body
//         const {rating} = req.body
    
//         try{
//             if(subject){
//                 const course = await Course.find({Subject:subject})
//                 return res.status(200).json(course)
//             }else{
//                 if(rating){
//                     const course = await Course.find({Rating:rating})
//                     return res.status(200).json(course)
//                 }
                
//             }
//             throw new Error("No such Course")
//         }
//         catch(error){
//             return res.status(500).json({error: error.message})
//         }
//     }

// const filterPrice = async(req,res) => {

//     const {Price} = req.body;
//     try{
//     const x = await Course.find({ Price:Price})

   
//     res.status(200).json(x)
 
//     }catch(error){
//         res.status(400).json({error:error.message})
//     }
// }
// const filterprice = asyncHandler(async (req, res, next) =>  {

//     const reqQuery = { ...req.query };
  
//     const removeFields = ["sort"];
//     console.log(reqQuery)
//     removeFields.forEach((val) => delete reqQuery[val]);
//     console.log(reqQuery)
//     let queryStr=JSON.stringify(reqQuery);
//     console.log(queryStr);
//     queryStr=queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g,(match)=>
//     `$${match}`)
//     console.log(queryStr)
//     const courses =await Course.find(JSON.parse(queryStr));
//         res.status(200).jsonres.status(200).json({
//             success: true,
//             data: courses})});
const filterprice =async (req, res) => {
    console.log(req.params)
    console.log(req)
    const query=parseInt(req.query.query)
    const x = await Course.find({Price:query})
    res.status(200).json(x);}
const filterRating =async (req, res) => {
        console.log(req.params)
        console.log(req)
        const query=parseInt(req.query.query)
        const x = await Course.find({Rating:query})
        res.status(200).json(x);}
const filtersubject =async (req, res) => {
            console.log(req.params)
            console.log(req)
            const query=(req.query.query)
            const x = await Course.find({Subject:query})
            res.status(200).json(x);}
    
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


module.exports = {filterRating,filterprice,getCourses,getCoursesPrice,editcourse,filtersubject}