const Admin = require('../models/Admin')
const CorporateTrainee = require('../models/CorporateTrainee')
const Instructor = require('../models/Instructor')
const AccessRequests = require('../models/AccessRequests')
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course')
const Reports = require('../models/Reports');
const Wallet = require('../models/Wallet');
const Payment = require('../models/Payment')
const Refund = require('../models/Refunds')
const mongoose = require('mongoose')

//functions here
const addAdmin = async(req,res) => {
   
    const{Username,Password} = req.body;
    try{
        const newAdmin = await Admin.create({Username:Username,Password : Password , Type : 0});
          res.status(200).json(newAdmin)
    }catch(error){
          res.status(400).json({error:error.message})
    }
}
const addInstructors = async(req,res) => {
   
    const{Username,Password} = req.body;
    try{
        const newInstructor = await Instructor.create({Username:Username,Password : Password , Type : 1});
        return  res.status(200).json(newInstructor)
    }catch(error){
        return  res.status(400).json({error:error.message})
    }
}
const addCorporateTrainee = async(req,res) => {
   
    const{Username,Password} = req.body;
    try{
        const newCorporateTrainee = await CorporateTrainee.create({Username:Username,Password : Password , Type : 2});
        return  res.status(200).json(newCorporateTrainee)
    }catch(error){
        return  res.status(400).json({error:error.message})
    }
}
//59
//check if you need to add to enrollments and add that part
const grantaccess = async(req,res) => {
    const {CourseId,StudentId} = req.query;
    var accepted = "Access Granted";
    try{
        const newRequestAccess = await AccessRequests.findOneAndUpdate({TraineeID : StudentId , CourseID : CourseId},{Status:accepted})
        const newenrollment = await Enrollment.create({CourseId,StudentId})
        return res.status(200).json(newRequestAccess)
    }catch(error){
        return res.status(400).json({error:error.message})
    }
}
const getAccessReq = async (req, res) => {
    const requests = await AccessRequests.find({}).sort({createdAt: -1})
  
    for (let index = 0; index < requests.length; index++) {
        const element = requests[index];
        console.log(element.id);
    }
    res.status(200).json(requests)
}
const setPromotion = async (req,res)=>{
    const id1= req.query._id;
    const percent=req.body.percent;
try{
    const course = await Course.findById({_id:id1})
    console.log(course)
   // const course = await Course.findOne({_id:id})
    var old = course.Price
    console.log(old)
    var neww = Math.ceil(old - old*(percent/100))
    console.log(neww)
    //const newwstring= neww
    const x = await Course.findByIdAndUpdate(id1,{Price:neww , PriceBeforePromotion:old} )
    console.log(x)
    res.status(200).json(x)
}
catch(error){
    res.status(400).json({error:error.message})
}  
}
const ViewReportedProblems = async (req, res) => {
    const reports = await Reports.find({}).sort({createdAt: -1})
  
    for (let index = 0; index < Reports.length; index++) {
        const element = Reports[index];
        //console.log(element.id);
    }
    res.status(200).json(reports)
}
const MarkReported = async (req, res) => {
    const id1 = req.query.id
    const solution = req.body.solution
    try{
    const reports = await Reports.findOneAndUpdate({_id:id1},{Status:solution})
    return res.status(200).json(reports)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }  
}
const Adminrefund = async(req,res)=>{
    const idRef = req.query.id
    try{
        console.log(idRef)
        const refund = await Refund.findOneAndUpdate(idRef,{Status:"refunded"})
        console.log(refund)
        console.log(refund.UserId)
        console.log(refund.CourseId)
        const payinfo =await Payment.findOneAndUpdate({UserId:refund.UserId,CourseId:refund.CourseId},{Status:"refunded"})
        console.log(payinfo)
        console.log(refund.UserId)
        const wallet = await Wallet.findOneAndUpdate({TraineeID:refund.UserId},{Amount:payinfo.CoursePrice})
        console.log(wallet)
        return res.status(200).json(wallet)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
const SearchforRefund = async (req, res) => {
    const {statuss,courseID,userID} = req.body
    try{
        if(statuss){
            const refund = await Refund.find({Status:statuss})
            return res.status(200).json(refund)
        }else{
            if(courseID){
                const refund = await Refund.find({CourseId:courseID})
                return res.status(200).json(refund)
            }
            else{
                if(userID){
                    const refund = await Refund.find({UserId:userID})
                    return res.status(200).json(refund)
                }
            }
        }
        console.log(statuss);
        console.log(courseID);
        console.log(userID);


        throw new Error("No such Course")
    }
    catch(error){
        return res.status(500).json({error: error.message})
    }
}
const ViewAllRefunds = async (req, res) => {
    const refund = await Refund.find({}).sort({createdAt: -1})

    for (let index = 0; index < refund.length; index++) {
        const element = refund[index];
        console.log(element.id);
    }
    res.status(200).json(refund)
}




//export the functions here
module.exports = {addAdmin,addInstructors,addCorporateTrainee,grantaccess, getAccessReq , setPromotion , ViewAllRefunds , ViewReportedProblems , MarkReported , Adminrefund , SearchforRefund}