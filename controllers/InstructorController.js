const Instructor = require('../../models/Instructor')
const Course = require('../../models/Course')
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
        const course = await Course.find({InstructorName:instructor})
      res.status (200).json(course)
  }
  catch (error) {
    res.status(500).json({error:error.message})
    }}

    const addCourse = async(req,res) => {
   
        const{Title,Subtitles,Price,Summary,INSid,InstructorName} = req.body;
        try{
            const course = await Course.create({Title,Subtitles,Price,Summary,INSid,InstructorName});
            res.status(200).json(course)
        }catch(error){
            res.status(400).json({error:error.message})
        }
    }
// filter his/her courses by Subject 
const instructorFilterHisCourseBySubject = async(req,res) => {
    const {instructor,subject} = req.body
    try{
    const course = await Course.find({InstructorName:instructor} && {Subject:subject})

   
    res.status(200).json(course)
 
    }catch(error){
        res.status(400).json({error:error.message})
}
}
const searchforcoursebysubjecttitleinstructor = async (req, res) => {
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


//export the functions here
module.exports = {getInstructors,instructerViewCourseByTitle,addCourse,instructorFilterHisCourseBySubject,searchforcoursebysubjecttitleinstructor}