const IndividualTrainee = require('../models/IndividualTrainee')
const mongoose = require('mongoose');
const Exercises = require('../models/Exercises');
const Wallet = require('../models/Wallet');
const Payment = require('../models/Payment');
const Reports = require('../models/Reports')
const Enrollement = require('../models/Enrollment')
const Refund = require('../models/Refunds')
const nodemailer=require('nodemailer');
const bcrypt = require('bcrypt')
//functions here
//38
const Viewcorrectsolutionsandtraineeanswers = async (req,res) =>{
    const {Username,Exerciseno} = req.body
    try{
        const exercises = await Exercises.find({TraineeUsername:Username,ExerciseNumber:Exerciseno})
      res.status (200).json(exercises)
  }
  catch (error) {
    res.status(500).json({error:error.message})
    }}
//37
const viewgradeIT = async (req,res) =>{
  const {id} = req.query
  try{
      const exercises = await Exercises.find({ITid:id})
    res.status (200).json(exercises)
}
catch (error) {
  res.status(500).json({error:error.message})
  }}

  // //36
  // const submitanswer = async(req, res) => { 
  //   //const userId = req.query.userId;
  //   const {answer} = req.body
  //   const {exercisenumber} = req.body
  //   const {trainee} = req.body
  //   try{
  //   const result = await Exercises.findOneAndUpdate({TraineeUsername:trainee,ExerciseNumber:exercisenumber},{TraineeSolutions:answer},{new:false})
  //   res.status(200).json(result)
  //   }
  //   catch{
  //       res.status(400).json({error:"Trainee ID is required"})
  //   }
  //     }

//36
 const submitanswerIT = async(req, res) => { 
  //const userId = req.query.userId;
  const {answer} = req.body
  const {exercisenumber} = req.body
  const {id} = req.query
  try{
  const result = await Exercises.findOneAndUpdate({ITid:id,ExerciseNumber:exercisenumber},{TraineeSolutions:answer},{new:false})
  res.status(200).json(result)
  }
  catch{
      res.status(400).json({error:"Trainee ID is required"})
  }
    } 

  //51
  const getwallet = async(req,res) => {
    const {id} = req.query
    try{
      const result = await Wallet.find({TraineeID:id})
      res.status(200).json(result)
    }
    catch{
      res.status(400).json({error:"Error"})
    }
  }

  const createwallet = async(req,res) => {
    const {TraineeID} = req.query
    const {Amount} = req.body
    try{
      const newwallet = await Wallet.create({TraineeID,Amount})
      res.status(200).json(newwallet)
    }catch(error){
      res.status(400).json({error:error.message})
    }
  }
  const pay = async(req,res) => {
    console.log("hi");
    var complete = 0;
    const{price} = req.body;
    const{courseid,userid}=req.query
    try{
        
        const question = await Payment.create({CourseId:courseid,UserId:userid,CoursePrice:price});
        const enroll=await Enrollement.create({CourseId:courseid,StudentId:userid,Completed:complete})
        res.status(200).json(enroll)
    }catch(error){
        res.status(400).json({error:error.message})
    }
  }
  const creditcard=async (req,res)=>{
    try{
    const{Creditnumber,ExpirationMonth,ExpirationYear}=req.body;
    const results=await Payment.findOneAndUpdate({UserId:req.query.id},{Creditnumber:Creditnumber,ExpirationMonth:ExpirationMonth,ExpirationYear:ExpirationYear});
    res.status(200).json(results)
  }
    catch{
        res.status(400).json({error:"wrong Id"})
    }
  }
  const pdf=async (req, res) => {
    try {
      /* forgotPassword: if click to forgotPwd btn  - we  send a email  and a req with the token_code(user)
       */
      console.log("forgot pass");
      const { email } = req.body;
      const existingUser = await IndividualTrainee.findOne({ email });
      if (!existingUser)
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
      text:"this is an email that you successfully completed this course",
      attachments: [{
          filename: 'Project description.pdf',
          path: 'D:/Uni Sem 7/ACL/Task 1/Silent-killers/Project description.pdf',
          contentType: 'application/pdf'
        }],
  
  }
  transporter.sendMail(options,function(err,info){
    if(err){
        console.log(err);
        return;
    }
    console.log("sent :" +info.response);
  })
  res.json({
    msg: "mail successfully sent",
  }); //seccess
  } catch (err) {
  return res.status(500).json({ msg: err.message }); //err
  }
  }
  const viewreportsIT = async (req,res) =>{
    const {id} = req.query
    try{
        const reports = await Reports.find({ITid:id})
        res.status (200).json(reports)
    }
    catch (error) {
        res.status(500).json({error:error.message})
        }
  
  }
  const reportIT= async (req,res) =>{
    const {id} = req.query
    const {course} = req.query
    const {coursetitle} = req.query
    const {problem} = req.body
    try{
        const exercises = await Reports.create({Course:coursetitle,CourseID:course,Problem:problem,Status:"Pending",ITid:id,View:"Unseen"})
      res.status (200).json(exercises)
  }
  catch (error) {
    res.status(500).json({error:error.message})
    }
}
const Refund2= async (req,res)=>{
  const {payment,user,course}=req.query;
  var status="awaiting approval"
  try{
    const wallet =await  Wallet.findOne({TraineeID : user});
    if(!wallet){
      const newwallet = await Wallet.create({TraineeID : user , Amount : 0});
    }
  const refund=await Refund.create({CourseId:course,PaymentId:payment,UserId:user,Status:status})
  res.status (200).json(refund)}
  catch (error) {
    res.status(500).json({error:error.message})
    }}
  
    const Payment1=async (req,res)=>{
      const courses = await Payment.find({}).sort({createdAt: -1})
      
        for (let index = 0; index < courses.length; index++) {
            const element = courses[index];
            console.log(element.id);
        }
        res.status(200).json(courses)
    }
    const viewpaymentbyid = async(req,res) => {
      const {id} = req.query;
      try{
          const course = await Payment.findById(id);
          res.status(200).json(course)
    }
      catch(error){
          res.status(400).json({error:error.message})
        }
    }
    const viewallExercises= async (req,res) =>{
      const exercises = await Exercises.find({}).sort({createdAt: -1})
    
      for (let index = 0; index < exercises.length; index++) {
          const element = exercises[index];
          console.log(element.id);
      }
      res.status(200).json(exercises)
  
  }

//export the functions here
module.exports = {Viewcorrectsolutionsandtraineeanswers,viewgradeIT ,submitanswerIT,getwallet,createwallet , pay , creditcard , pdf , viewreportsIT , reportIT , Refund2 , Payment1 , viewpaymentbyid , viewallExercises} 