const { Router } = require('express');
const express = require('express')
const { appendFile } = require('fs')
const router = express.Router()
const Course = require('../models/Course');
const { route } = require('./AdminRoutes');
    router.get("/id",postSearchbyinstructor,async (req, res) => {
    const x = await Course.find({title})
    res.status(200).json(x);
  });
  router.get("/id",postSearchbytitle,async (req, res) => {
    const x = await Course.find({subject})
    res.status(200).json(x);
  });
 
  router.get("/id",postSearchbySubject,async (req, res) => {
    const x = await Course.find({instructor})
    res.status(200).json(x);
     //xxx
    async function postSearchbyinstructor(req, res, next) {
        let Searchbyinstructor
        try {
            Searchbyinstructor = await Searchbyinstructor.findById(req.params.id)
          if (Searchbyinstructor == null) {
            return res.status(404).json({ message: 'Cannot find instructor' })
           }
        } catch (err) {
          return res.status(500).json({ message: err.message })
        } 
        
          any
        res.Searchbyinstructor = Searchbyinstructor
        next()
        async function postSearchbytitle(req, res, next) {
            let Searchbytitle
            try {
                Searchbytitle = await Searchbytitle.findById(req.params.id)
              if (Searchbytitle == null) {
                return res.status(404).json({ message: 'Cannot find title'})
               }
            } catch (err) {
              return res.status(500).json({ message: err.message })
            } 
            
              any
            res.Searchbytitle = Searchbytitle
            next()
       
        next() 
    
  }
    async function postSearchbySubject(req, res, next) {
        let SearchbySubject
        try {
        SearchbySubject = await SearchbySubject.findById(req.params.id)
         if (SearchbySubject == null) {
            return res.status(404).json({ message: 'Cannot find subject' })
        }
    }   catch (err) {
            return res.status(500).json({ message: err.message })
    } 
    
      any
    res.SearchbySubject = SearchbySubject}
    //createcourse
    router.post('addCourse',InstructorRoutes.addCourse);
 async function addCourse(req,res,next)
 try{
    const course = new Course(
      {
        title: "Title",
        subtitles: "Subtitles",
        price: 0,
        shortSummary: "Short Summary Here"
      }
    );
    const addCourse = await course.save();
    res.json({mssg: 'Added a new course'});
 } catch(err) {
   console.log("Error in adding course",err);
   return res.status(500).json({ msg: err.message});
 }
    
}})