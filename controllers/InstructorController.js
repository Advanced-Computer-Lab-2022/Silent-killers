const Instructor = require('../models/Instructor')
const Course = require('../models/Course')
const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;
//functions here

const nodemailer=require('nodemailer');
const Token=require('../models/token');
const Joi=require('joi');
const crypto=require('crypto');
const express=require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
//32
const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{user:"menna.hassan020101@gmail.com",
    pass:"iotymjglnfkniogq"}
})
const options={
    from:"menna.hassan020101@gmail.com",
    to:"alsorogy.mariam@gmail.com",
    subject:"sending email with node.js",
    text:"this is an email to change a forgotten password"
}
transporter.sendMail(options,function(err,info){
    if(err){
        console.log(err);
        return;
    }
    console.log("sent :" +info.response);
})
  const forgetpass2=async(req,res)=>{
    try{
      const{error}=validate(req.body);
      if(error)
        return res.status(400).send(error.details[0].message);
        const user=await new Instructor(req.body).save()
        res.send(user)
    }catch(error){
       res.send("an error occured");
       console.log(error); 
    }
  }
  const fgpass3=async(req,res)=>{
    try{
    const schema=Joi.object({Email:Joi.string().email().required()})
    const {error}=schema.validate(req.body);
    if(error)return res.status(400).send(error.details[0].message);
    const user=await Instructor.findOne({Email:req.body.email});
    if(!user){
      return res.status(400).send("user with given does not exist");}
    let token=await Token.findOne({userId:user._id});
    console.log("menna");
    if(!token){
      token=await new Token({
        userId : user._id,
        token: crypto.randomBytes(32).toString('hex'),
      }).save()
    }
    const link=`${process.env.BASE_URL}/fgpass/${user._id}/${token.token}`;
    await sendEmail(user.Email,"password",link);
    res.send("password reset link sent to email");}
    catch{
      res.send("an error occured");
    }
  }
  const fgpasstry=async(req,res)=>{
    try{
      const schema=Joi.object({password:Joi.string().required()});
      const {error}=schema.validate(req.body);
      if(error)
      return res.status(400).send(error.details[0].message);
      const user=await Instructor.findById(req.params.userId);
      if(!user)
        return res.status(400).send('Invalid link or expired.')
      const token=await Token.findOne({
        userId:user._id,
        token:req.params.token
      });
      if(!token) return res.status(400).send("invalid link");
      user.Password=req.body.password
      await user.save();
      await token.delete();
      res.send("password reset successfully");}
        catch(error){
          res.send('An error occured')
          console.log(error);
        }
  }

// can be used to view his/her rating using his/her own id and returning only ratings in frontend
//also for requirement 5 view contract
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
                alert(title);
                return res.status(200).json(course)
            }
            else{
                if(instructor){
                    const course = await Course.find({InstructorID:instructor})
                    return res.status(200).json(course)
                }
            }
        }
        console.log(subject);
        console.log(instructor);
        console.log(title);

    
        throw new Error("No such Course")
    }
    catch(error){
        return res.status(500).json({error: error.message})
    }
}
//25
const addPreviewVid = async(req,res) => {
        const {link}=req.body
        const course=await Course.findByIdAndUpdate(req.params.id,{PreviewVideo:link})
        res.status(200).json(course)
    }
//5
const AcceptContract = async(req,res) =>{
    //const {Status} = "Accepted"
    const contract = await Instructor.findByIdAndUpdate(req.params.id , {ContractStatus:"Accepted"})
    console.log("Contract Accepted")
    res.status(200).json(contract)
}

const editpassword = async(req, res) => {
    
    try{
        const{
            password
        } =req.body;
        console.log("Req Body");
        const editpass = await Instructor.findByIdAndUpdate(req.query.id,{Password:password});
        if(editpass._id)
        {
            editpass.Password =password;
        }
        const pw = await editpass.save();
        res.json(pw);
    } catch(err) {
        console.log("Error");
        return res.status(500).json({msg: err.message});
    }

}
const editBioEm = async(req, res) => {
    console.log("reached")
    try{
        const{
            biography,
            email
        } = req.body;
        console.log("Req Body");
        const instructor = await Instructor.findByIdAndUpdate(req.query.id,{Biography:biography,Email:email});
    
        if(instructor._id)
        {

            console.log(instructor.Biography)
            console.log(instructor.Email)
        instructor.Biography = biography;
        instructor.Email = email;
        }
        const edit = await instructor.save();
        res.send("hello");
    } catch(err) {
        console.log("Error");
        return res.status(500).json({msg: err.message});
    }
}
const addDiscount=async(req,res)=>{
    try{
    const{discount,noofdays} =req.body;
    console.log("Req Body");
    const ss = await Course.findByIdandUpdate(req.query.id,{Discount:discount,NoOfDays:noofdays});
    if(ss._id)
    {
    ss.Discount=discount;
    ss.NoOfDays=noofdays;
    }
    const edit = await id.save();
    res.json(edit);
}
    catch(err) {
        console.log("Error");
        return res.status(500).json({msg: err.message});
    }
}

const addQuestion = async(req,res) => {
    const{ExerciseNumber,TraineeUsername,Questions,CorrectSolutions,CourseTitle,TraineeSolutions} = req.body;
    try{
        const question = await Exercises.create({ExerciseNumber,TraineeUsername,Questions,CorrectSolutions,CourseTitle,TraineeSolutions});
        res.status(200).json(question)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
//21
const viewratingandreviews= async (req,res) =>{
    const {instructor} = req.body
    try{
        const course = await Course.find({InstructorID:instructor})
      res.status (200).json(course)
  }
  catch (error) {
    res.status(500).json({error:error.message})
    }}

//24
const addYoutubeAndDesc = async(req, res) => {
    const id=req.params.id;
    const {youTube,desc}=req.body
    if(id){
        const result=await Course.findByIdAndUpdate(id,{Subtitles:youTube,SubtitlesDES:desc})
        res.status(200).json(result)
    }
    else{
        res.status(400).json({error:"---"});
    }}

    //26
    const setanswer = async(req, res) => {

        const {answer1} = req.body
        const {insid}= req.body
        const {exercisenumber1} = req.body
        try{
          const result = await Exercises.findOneAndUpdate({InstructorID:insid,ExerciseNumber:exercisenumber1},{CorrectSolutions:answer1},{new:false})
          res.status(200).json(result)
          }
          catch{
              res.status(400).json({error:"Ins ID is required"})
          }
            } 

//export the functions here
module.exports = {getInstructors,instructerViewCourseByTitle,addCourse,instructorFilterHisCourseBySubject,searchforcoursebysubjecttitleinstructor,searchformyowncoursebysubjecttitleinstructor,addPreviewVid,AcceptContract,editpassword,editBioEm,addDiscount,addQuestion,viewratingandreviews,forgetpass2,fgpass3,fgpasstry,addYoutubeAndDesc,setanswer}