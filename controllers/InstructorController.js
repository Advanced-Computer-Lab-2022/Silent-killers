const Instructor = require('../models/Instructor')
const Course = require('../models/Course')
const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

//functions here
const getInstructors = async (req, res) => {
    const instructors = await Instructor.find({}).sort({createdAt: -1})
  
    for (let index = 0; index < instructors.length; index++) {
        const element = instructors[index];
        console.log(element.id);
    }
    res.status(200).json(instructors)
}

const instructerViewCourseByTitle = async (req,res) =>{
    const {instructor} = req.body
    try{
        const course = await Course.find({InstructorID:instructor})
      res.status (200).json(course)
  }
  catch (error) {
    res.status(500).json({error:error.message})
    }}

    const addCourse = async(req,res) => {
   
        const{Title,INSid,InstructorName,TotalHoursOfCourse,Rating,Subtitles,Subject,Summary,Exercises,Price,TotalHoursOfEachSubtitle} = req.body;
        try{
            const course = await Course.create({Title,INSid,InstructorName,TotalHoursOfCourse,Rating,Subtitles,Subject,Summary,Exercises,Price,TotalHoursOfEachSubtitle});
            res.status(200).json(course)
        }catch(error){
            res.status(400).json({error:error.message})
        }
    }
// filter his/her courses by Subject 
// const instructorFilterHisCourseBySubject = async(req,res) => {
//     //const userId = req.params.id;
//     console.log(req.params)
//     console.log(req)
//     const {subject} = req.body
//     const instructor = req.params.id
//     // if(userId){
//     //     const result = await Course.find({INSid:mongoose.Types.ObjectId(userId)}).populate('S');
//     //     res.status(200).json(result)
//     //     }
//     try{
//     const course = await Course.find({Subject:subject,INSid:mongoose.Types.ObjectId(instructor)})

//    //if(const course2 = await Course.find(Subject:subject))
//     res.status(200).json(course)
 
//     }catch(error){
//         res.status(400).json({error:error.message})
// }
// }
const filtersubjectByins =async (req, res) => {
    console.log(req.params)
    console.log(req)
    const instructorid=(req.query.instructorid)
    const query=(req.query.query)
    const x = await Course.find({Subject:query,INSid:mongoose.Types.ObjectId(instructorid)})
    res.status(200).json(x);}
//#20
const searchformyowncoursebysubjecttitleinstructor = async (req, res) => {
    const {subject,instructor} = req.body
    const {title} = req.body

    try{
        if(subject){
            const course = await Course.find({Subject:subject,InstructorID:instructor})
            return res.status(200).json(course)
        }else{
            if(title){
                const course = await Course.find({Title:title,InstructorID : instructor})
                return res.status(200).json(course)
            }
        }
        throw new Error("No such Course")
    }
    catch(error){
        return res.status(500).json({error: error.message})
    }
}
//#11
const searchforcoursebysubjecttitleinstructor = async (req, res) => {
    const {subject,instructor} = req.body
    const {title} = req.body

    try{
        if(subject){
            const course = await Course.find({Subject:subject})
            return res.status(200).json(course)
        }else{
            if(title){
                const course = await Course.find({Title:title})
                return res.status(200).json(course)
            }
            else{
                if(instructor){
                    const course = await Course.find({InstructorID:instructor})
                    return res.status(200).json(course)
                }
            }
        }
        throw new Error("No such Course")
    }
    catch(error){
        return res.status(500).json({error: error.message})
    }
}
//delete course
const DeleteCourse=async(req, res) => {
    try {
      await Course.findByIdAndDelete(req.params.id);
    
          res.json({ msg: "Deleted Success!" });}
         catch (err) {
          return res.status(500).json({ msg: err.message });
        }}

      

//export the functions here
module.exports = {filtersubjectByins,DeleteCourse,getInstructors,instructerViewCourseByTitle,addCourse,searchforcoursebysubjecttitleinstructor,searchformyowncoursebysubjecttitleinstructor}