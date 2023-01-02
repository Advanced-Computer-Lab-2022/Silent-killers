const Instructor = require('../models/Instructor')
const Course = require('../models/Course')
const Exercises = require('../models/Exercises')
const Reports = require('../models/Reports')
const Payment = require('../models/Payment')
const Guest = require('../models/Guest');
const IndividualTrainee = require('../models/IndividualTrainee');
const CorporateTrainee = require('../models/CorporateTrainee');
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
const forgotPassword=async (req, res) => {
    try {
      /* forgotPassword: if click to forgotPwd btn  - we  send a email  and a req with the token_code(user)
       */
      console.log("forgot pass");
      const { email } = req.body;
      const existingUser = await Instructor.findOne({ email });
      const User = await IndividualTrainee.findOne({ email });
      const User2 = await CorporateTrainee.findOne({ email });
      if (!existingUser)
        return res.status(400).json({ msg: "That Email doesn't exist." });
        if (!User)
        return res.status(400).json({ msg: "That Email doesn't exist." });
        if (!User2)
        return res.status(400).json({ msg: "That Email doesn't exist." });
     
const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{user:"alsorogy.mariam@gmail.com",
    pass:"dxzqiqlwvjsgwqhn"}
})
const options={
    from:"alsorogy.mariam@gmail.com",
    to:email,
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
      res.json({
        msg: "Re-send the password, please check your email inbox or spam.",
      }); //seccess
    } catch (err) {
      return res.status(500).json({ msg: err.message }); //err
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

const getInstructorbyid = async (req, res) => {
    // const instructors = await Instructor.findById(req.params.id)
    const id = req.query.id;
    // const instructors = await Instructor.findById(id)
    const instructors = await Instructor.findOne({_id:id})
    // for (let index = 0; index < instructors.length; index++) {
    //     const element = instructors[index];
    //     console.log(element.id);
    // }
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
// filter his/her courses by Subject + price
const instructorFilterHisCourseBySubjectorprice = async(req,res) => {
    const {subject,price} = req.body
    const {instructor} = req.query
    // if(userId){
    //     const result = await Course.find({INSid:mongoose.Types.ObjectId(userId)}).populate('S');
    //     res.status(200).json(result)
    //     }
    try{
        if(subject){
    const course = await Course.find({Subject:subject,INSid:instructor})
    res.status(200).json(course)
    }
        if(price){
            const course = await Course.find({Price:price,INSid : instructor})
            res.status(200).json(course)
        }

   //if(const course2 = await Course.find(Subject:subject))
   
 
    }catch(error){
        res.status(400).json({error:error.message})
}
}
//#20
const searchformyowncoursebysubjecttitleinstructor = async (req, res) => {
    const {subject} = req.body
    const {title} = req.body
    const {instructor} = req.query
    try{
        if(subject){
            const course = await Course.find({Subject:subject,InsID:instructor})
            return res.status(200).json(course)
        }else{
            if(title){
                const course = await Course.find({Title:title,InsID : instructor})
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
//changed body in link to query and changed params in id to quey + removed         const {link}=req.query.PreviewVideo and repleced it in find by id an dupdate
// const addPreviewVid = async(req,res) => {
//     console.log("in here")
//         const {link}=req.body
//         const course=await Course.findByIdAndUpdate(req.query.id,{PreviewVideo:link})
//         res.status(200).json(course)
//     }

const addPreviewVid = async(req, res) => {
    console.log("reached")
    try{
        const{
            link
        } = req.body;
        console.log("Req Body");
        const instructor = await Course.findByIdAndUpdate(req.query.id,{PreviewVideo:link});
    
      //  if(instructor._id)
       // {

           // console.log(instructor.PreviewVideo)
            // console.log(instructor.Email)
       // instructor.PreviewVideo = link;
        // instructor.Email = email;
      //  }
        //const edit = await instructor.save();
       // res.send("hello");
    } catch(err) {
        console.log(err.message);
        return res.status(500).json({msg: err.message});
    }
}
//5
const AcceptContract = async(req,res) =>{
    //const {Status} = "Accepted"
    const contract = await Instructor.findByIdAndUpdate(req.query.id , {ContractStatus:"Accepted"})
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
        const editpass1 = await CorporateTrainee.findByIdAndUpdate(req.query.id,{Password:password});
        const editpass2 = await IndividualTrainee.findByIdAndUpdate(req.query.id,{Password:password});
        if(editpass)
        {
            editpass.Password =password;
            const pw = await editpass.save();
        }
        if(editpass1)
        {
            editpass1.Password =password;
            const pw = await editpass1.save();
        }
        if(editpass2)
        {
            editpass2.Password =password;
            const pw = await editpass2.save();
        }
        //const pw = await editpass.save();
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
    console.log(discount);
    console.log(noofdays);
    const tt = await Course.findByIdAndUpdate(req.query.id,{Discount:discount,NoOfDays:noofdays});
    if(tt._id)
    {
    tt.Discount=discount;
    tt.NoOfDays=noofdays;
    }
    const edit = await tt.save();
    res.json(edit);
}
    catch(err) {
        console.log("Error");
        return res.status(500).json({msg: err.message});
    }
}


const addQuestion = async(req,res) => {
    const{ExerciseNumber,TraineeUsername,Questions,CorrectSolutions,CourseTitle} = req.body;
    try{
        const question = await Exercises.create({ExerciseNumber,TraineeUsername,Questions,CorrectSolutions,CourseTitle});
        res.status(200).json(question)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
//21
const viewratingandreviews= async (req,res) =>{
    const {instructor} = req.query
    try{
        const course = await Course.find({INSid:instructor})
      res.status (200).json(course)
  }
  catch (error) {
    res.status(500).json({error:error.message})
    }}

//24
const addYoutubeAndDesc = async(req, res) => {
    const id=req.query.id;
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
    const {id} = req.query
    const {answer1} = req.body
    try{
      const result = await Exercises.findByIdAndUpdate(id,{CorrectSolutions:answer1},{new:false})
      res.status(200).json(result)
      }
      catch{
          res.status(400).json({error:"Ins ID is required"})
      }
        } 


            const InsRating = async(req,res) => {
                //const id=req.params.id;
                const {rating} = req.body;
                    try{
                const x = await Instructor.findById(req.params.id)
                const inc = x.NoRating + 1
                const avg = ((x.Rating*x.NoRating) + rating)/(x.NoRating+1)
                 const ins = await Course.findByIdAndUpdate(req.params.id,{Rating:avg , NoRating:inc} )
                        console.log(ins)
                   
                    res.status(200).json(ins)
                 
                    }catch(error){
                        res.status(400).json({error:error.message})
                    }
                }

                const getcoursesbypob=async (req, res) => {
                    try {
                    //   const Title = req.body
                      const courses = await Course.find({}).sort("-Rating").limit()
                      res.json(courses);
                    } catch (error) {
                      console.log("-----------course pobular error---------");
                      console.log(error);
                      return res.status(500).json({ msg: error.message});}}

const viewreportsINS = async (req,res) =>{
    const {id} = req.query
     try{
      const reports = await Reports.find({INSid:id})
    res.status (200).json(reports)
                        }
     catch (error) {
     res.status(500).json({error:error.message})
                            }
                    }
//47
const reportINS = async (req,res) =>{
    const {id} = req.query
    const {course} = req.query
    const {coursetitle} = req.query
    const {problem} = req.body
    try{
        const exercises = await Reports.create({Course:coursetitle,CourseID:course,Problem:problem,Status:"Pending",INSid:id,View:"Unseen"})
      res.status (200).json(exercises)
  }
  catch (error) {
    res.status(500).json({error:error.message})
    }
}
const followup = async (req,res) =>{
    const {id} = req.query
    const {comment} = req.body
    try{
        // const reports = await Reports.findOneAndUpdate({INSid:id},{Comment:comment},{new:false})
        //if()
        const reports= await Reports.findById(id)
        if(reports.Status=="Unresolved"|| reports.Status=="Pending"){
            const reports1 = await Reports.findByIdAndUpdate(id,{Comment:comment},{new:false})
            res.status (200).json(reports1)
        }
        else{
            res.status (200).json("Report Already Resolved")
        }
    }
    catch (error) {
        res.status(500).json({error:error.message})
        }
 }
 const Viewamountowed = async (req,res) =>{
    const {id} = req.query
    try{
    const amount = await Payment.find({InstructorId:id})
    res.status (200).json(amount)
}
    catch (error) {
        res.status(500).json({error:error.message})
        }

 }
//export the functions here
module.exports = {getInstructors,instructerViewCourseByTitle,addCourse,instructorFilterHisCourseBySubjectorprice,searchforcoursebysubjecttitleinstructor,searchformyowncoursebysubjecttitleinstructor,addPreviewVid,AcceptContract,editpassword,editBioEm,addDiscount,addQuestion,viewratingandreviews,forgotPassword,addYoutubeAndDesc,setanswer,getInstructorbyid,InsRating , getcoursesbypob , viewreportsINS , reportINS, followup , Viewamountowed} 