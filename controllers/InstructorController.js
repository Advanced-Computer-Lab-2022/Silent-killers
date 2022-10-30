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
   
        const{Title,InstructorID,TotalHoursOfCourse,Subtitles,Subject,Summary,Exercises,Price,TotalHoursOfEachSubtitle} = req.body;
        try{
            const course = await Course.create({Title,InstructorID,TotalHoursOfCourse,Subtitles,Subject,Summary,Exercises,Price,TotalHoursOfEachSubtitle});
            res.status(200).json(course)
        }catch(error){
            res.status(400).json({error:error.message})
        }
    }
// filter his/her courses by Subject 
const instructorFilterHisCourseBySubject = async(req,res) => {
    //const userId = req.params.id;
    const {subject} = req.body
    const {instructor} = req.body
    // if(userId){
    //     const result = await Course.find({INSid:mongoose.Types.ObjectId(userId)}).populate('S');
    //     res.status(200).json(result)
    //     }
    try{
    const course = await Course.find({Subject:subject,InstructorID:instructor})

   //if(const course2 = await Course.find(Subject:subject))
    res.status(200).json(course)
 
    }catch(error){
        res.status(400).json({error:error.message})
}
}
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

//export the functions here
module.exports = {getInstructors,instructerViewCourseByTitle,addCourse,instructorFilterHisCourseBySubject,searchforcoursebysubjecttitleinstructor,searchformyowncoursebysubjecttitleinstructor}