#   Online Learning System

# Description
The aim of the project, is to create a complete Online Learning System. An Online Learning System is a web application through which individuals can attend pre-recorded courses online. Existing web applications include but are not limited to Coursera, Udemy,LinkedIn Learning, Great Learning and Udacity.
In our system we have Guests,Admins,Instructors,Individual and corporate Trainees as different types of users. The trainees study the courses under the supervision and instructions of instructors while the admins oversee the smooth operations of everything and handle conflicts.

Install and Run the project:-
You can download the code as zip file and use VScode to run it: -> First,Run the backend:-
1-go to sillent-killers folder with the command----> cd silent-killers
2-Install all needed packages using this----> npm i
3-run the server by the command----> node app.js
Second,Run the frontend:-
1-go to the frontend folder using command-----> cd frontend
2-Install all needed packages using this----> npm i
3-run the frontend by the command----> npm start

## Motivation
The motivation behind the project is the need for more systems in this online learning space with the growing demand for such platforms increasing since the COVID pandemic making online learning much more popular and a necessity for alot of educational organizations.
## Build Status
This build is an initial one with the lack of proper UI/UX utilization aspects and some known errors that need remification. These errors are:
1- The trainee is unable to watch the videos of his/her courses and hence the progression is not handled correctly and tracked.
2- The exercises are written in the form of questions and not in the MCQ form required
3- Once a report is seen, it is not marked as such.
4- Once a trainee paid for a course, it doesn't correctly list the course in his/her enrolled courses
5- You can rate any instructor or course regardless of whether or not the trainee has taken that course or interacted with that instructor
6- Since watching videos and recording progress is not correctly implemented things that depend on the progression are inaccurate as they cannot correctly track progress. Hence for example the traineee is only allowed to download their certificate once they have finished the course but since progress is not correctly tracked, the trainee cannot download their certificate.

## Code Style
The project is coded with a standard coding style and approach
## Screenshots
![1](https://user-images.githubusercontent.com/115995971/210179995-fb0792a4-98c7-4409-9461-189a5ce7e60a.jpg)
![2](https://user-images.githubusercontent.com/115995971/210180107-9e2d2fa9-ff40-43dc-b5b6-e8a05e604e23.jpg)
![3](https://user-images.githubusercontent.com/115995971/210180115-a655ae2b-f230-467f-a952-99fcb42d846c.jpg)
![4](https://user-images.githubusercontent.com/115995971/210180131-4d229bb9-5694-468e-a6f4-b6c4d3748d08.jpg)
![5](https://user-images.githubusercontent.com/115995971/210180138-363ebb63-01ff-4804-acfe-d6a4fa2f655c.jpg)
![7](https://user-images.githubusercontent.com/115995971/210180150-e6040ce8-41e0-4c01-9f5e-b9315d387a3b.jpg)
![8](https://user-images.githubusercontent.com/115995971/210180167-37bc3cd1-75b4-4a4f-b84b-698898ed8c9c.jpg)
## Tech/ Framework Used
The technologies used in this project are as follows: Node js , Express , React and Mongo DB

## Features
. The guest can:
1-Can sign up as an individual trainee or corporate trainee. 
2-View and accept the website/company refund/payment policy while signing up.
3-View all titles of the courses available including total hours of the course and course rating. 
4-View the price of each course. 
5-Search for course based on subject,title or instructor. 
6-Choose a course from the results and view its details including course subtitles, excercises , total hours of each subtitle, total hours of the course. 
7-View a preview video of the course and the course outline before registering for it. 
8-Filter courses based on price,subject or rating
9-View the most popular courses
10-Select your country
11-Receive an email for their forgotten password
Instructor:- 
1-Upload a video link from YouTube under each subtitle and enter a short description of the video. 
2-Upload a video link from YouTube as a preview to the course. 
3-Create a multiple choice exam with 4 choices per question. 
4-Set the answers (not visible for the trainee) for multiple choice exercises. 
5-View his/her rating and reviews as an instructor. 
6-Edit his/her mini biography or email. 
7-Define a promotion for the course and for how long. 
8-View and accept their contract
9-Filter and search through their own courses
10-View and followup previously reported problems
11-View and report courses
12-View the monthly amount he/she is owed
13-View the most popular courses
Individual Trainee and Corporate Trainee:- 
1-Rate an instructor. 
2-Rate a course. 
3-Solve a multiple choice exercise by choosing the correct answer. 
4-Submit the answers to the exercise after completing it. 
5-View his/her grade from the exercise. 
6-View the questions with the correct solution to view the incorrect answers. 
7-Download the certificate as a PDF from the website. 
8-Write notes while watching the video. 
9-Download the notes as a PDF.
10-Receive their certificate through email
11-Filter and search through courses
12- View Courses they are enrolled in
13-View all courses and file reports
14-View all your reports and follow up on them
15-View all exercises and submit your answers to them
16-View his/her grades in exercises
17-Log out
18-Change your password
Features only for the Administrator 
1-Mark reported problems as "resolved" or "pending". 
2-Refund an amount to a trainee to their wallet. 
3-Add another administrator with a set username and password. 
4-Add instructors and create their usernames and passwords.
5-View all reported problems
6-View all refund requests
7-Add new corporate trainees
8-View courses to grant access requests and set promotions
9-Log out

## Code example
The following is the admin routes part:
--------------------------------------------------
const express = require('express')
//import functions
 const {
 addAdmin,addInstructors,addCorporateTrainee, grantaccess , getAccessReq , setPromotion ,  ViewReportedProblems , MarkReported , Adminrefund , SearchforRefund , ViewAllRefunds
   } = require('../controllers/AdminController')
   const {
    viewcoursebyid
   } = require('../controllers/CourseController')


const router = express.Router()

//routes
router.post('/addadmin',addAdmin)
router.post('/addCorporateTrainee',addCorporateTrainee)
router.post('/addInstructor',addInstructors)
router.patch('/grantaccess', grantaccess)
router.get('/getAccessReq',getAccessReq)
router.post('/viewcoursebyid' , viewcoursebyid);
router.get('/ViewReportedProblems',ViewReportedProblems)
router.patch('/MarkReported',MarkReported)
router.patch('/Adminrefund',Adminrefund)
router.patch('/setPromotion', setPromotion)
router.patch('/SearchforRefund',SearchforRefund)
router.get('/ViewAllRefunds',ViewAllRefunds)
//hii

module.exports = router
--------------------------------------------------
in this code extract we are routing the functions from their respective controllers to be accessible so we can call them later on.
And this following extract is from the admin controller where the functions are defined in the backend
--------------------------------------------------
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
        const wallet1 = await Wallet.findOne({TraineeID : payinfo.UserId});
        const wallet = await Wallet.findOneAndUpdate({TraineeID:refund.UserId},{Amount:(payinfo.CoursePrice + wallet1.Amount)})
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
--------------------------------------------------
In the above code extract we define the backend functions to do the necessary changes to our database whether to create new entries, update existing ones etc.

## Installation
### - Before running the project !!
* Make sure that you have *vs code* installed.
* Make sure that you have *node* installed.
* Make sure that you have *Postman* installed.
* Clone the repository to your computer.
* Make sure that the server is running with all installations.

### In case of any missing libraries. 
- please fix and install everything . Check the package-lock.json to see what you are missing.
or you can just type in terminal to install all missing packages:
    
    npm install 
After cloning the repo, open the directory
## API Reference
links : http://localhost:8000 followed by:
For admin routes: /api/Admin then:
/addadmin
/addCorporateTrainee
/addInstructor
/grantaccess
/getAccessReq
/viewcoursebyid
/ViewReportedProblems
/MarkReported
/Adminrefund
/setPromotion
/SearchforRefund
/ViewAllRefunds
--------------------------------------------------
For Course routes: /api/Course then:
/getcourses
/getcourseprice
/filterRate
/editcourse/:id
/filterprice
/filtersubject
/filterratingorsubject
/ratecourse
/viewcoursebyid
--------------------------------------------------
For Corporate Trainee Routes : /api/CorporateTrainee then:
/searchby
/filterratingorsubject
/filterprice
/viewgradeCT
/viewanswers
/courseRating
/ViewCourseDetails
/insRating
/submitanswerCT
/requestaccess
/writenotes
/enrollid
/viewreportsCT
/reportCT
/viewcoursebyid
--------------------------------------------------
For Individual Trainee Routes : /api/IndividualTrainee then:
/searchby
/filterratingorsubject
/filterprice
/viewanswers
/viewgradeIT
/submitanswerIT
/courseRating
/insRating
/getwallet
/createwallet
/writenotes
/createpayment
/creditcard
/pdf
/enrollid
/viewreportsIT
/reportIT
/refund
/ViewCourseDetails
/refund
/getpayment
/viewpaymentbyid
/viewallExercises
--------------------------------------------------
For Instructor Routes : /api/Instructor then:
/getinstructor
/addcourses
/insfilter
/searchbythings
/searchby
/filterratingorsubject
/filterprice
/addpreviewvid
/AcceptContract
/EditPassword
/EditBio
/adddiscount
/addquestion
/viewratingsandreviews
/Adddesc
/setanswer
/getinsbyid
/mostrating
/forgot
/viewreportsINS
/reportINS
/followup
/Viewamountowed
/inssearchby
--------------------------------------------------
For Guest Routes : /api/Guest then:
/searchby
/filterratingorsubject
/filterprice
/signup
/login
/logout
--------------------------------------------------
For Enrollment routes : /api/Enrollement then:
/getenroll
/addenroll
/enrollid


## Tests
Testing is done using postman for the most part and using your browser for frontend testing 
Using postman we can test different requests by selecting the type of request (post,patch,put etc) and providing the route with any required parameters or body.
As an example to test the function Refund2 in the individual trainee controller we would put the following into postman as a post request:
http://localhost:8000/api/IndividualTrainee/refund?payment=63af1e6d5f19936ee19105c0&user=63ac98d6b6a725325cc17326&course=6363a0b9f59e43a99c371f73
which feeds the request the parameters it needs and we could them verify it gives the desired output
And using the browser we run the code in vs code backend and front as explained above and opening your browser to the page http://localhost:3000/refund and testing with parameters that you need and verifying the result.
This idea is to be replicated with any of the pages or functions in the project

## How to Use
As mentioned before we would run the backend and frontend as discussed and open the browser to http://localhost:3000/ which brings you to the guest home page from which you can then navigate through the project going to the seperate pages and testing or using all the implemented functionalities such as logging in,signing up ,filtering or searching through courses and more.
## Contribute
As a developer you may contribute to our project by developing a better functioning UI and improving the UX as well as fixing the issues mentioned above in the build status such as the users being unable to watch videos through the system. As well as overall improvement of the system as a whole whether logically or in appearance.
## Credits
Team Members:-
1-Menna Hassan(scrum master)
2-Mariam Ashraf
3-Omar Ashraf
4-Hazem Gado
5-Andrew ossama
We used multiple resources to learn and be able to implement the functionalities required, these resources are:
https://www.youtube.com/@NetNinja
https://www.geeksforgeeks.org/
https://stackoverflow.com/
https://www.youtube.com/@WebDevSimplified

## License
MIT License

Copyright (c) 2023 Silent-killers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

