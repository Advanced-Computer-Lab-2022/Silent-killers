const Guest = require('../models/Guest')
const IndividualTrainee = require('../models/IndividualTrainee');
const CorporateTrainee = require('../models/CorporateTrainee');
const Admin = require('../models/Admin');
const mongoose = require('mongoose')
// import React, { useState, useMemo } from 'react'
// import Select from 'react-select'
// import countryList from 'react-select-country-list'

//functions here
// function CountrySelector() {
//     const [value, setValue] = useState('')
//     const options = useMemo(() => countryList().getData(), [])
  
//     const changeHandler = value => {
//       setValue(value)
//     }
    
//     return <Select options={options} value={value} onChange={changeHandler} />
//   }

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Instructor = require('../models/Instructor');
const maxAge = 3 * 24 * 60 * 60;
const createToken = (name) => {
    return jwt.sign({ name }, 'supersecret', {
        expiresIn: maxAge
    });
};
const signUp = async (req, res) => {
    const { Username, Password,Firstname,Lastname,Gender } = req.body;
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(Password, salt);
        const user = await IndividualTrainee.create({ Username: Username,Password:hashedPassword,Firstname:Firstname,Lastname:Lastname,Gender:Gender , Type : 3 });
        const token = createToken(user.Username);

        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    }




const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
    
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'supersecret', (err, decodedToken) => {
      if (err) {
        // console.log('You are not logged in.');
        // res send status 401 you are not logged in
        res.status(401).json({message:"You are not logged in."})
        // res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.status(401).json({message:"You are not logged in."})
  }
};


const login = async (req, res) => {
  // TODO: Login the user
  const {Username,Password}=req.body;
  const login=await Instructor.findOne({Username:Username});
  const login1 = await IndividualTrainee.findOne({Username:Username})
  const login2 = await CorporateTrainee.findOne({Username : Username})
  const login3 = await Admin.findOne({Username : Username})
  if (login){
      try{if(Password == login.Password){
        
          console.log("successful");
      const token = createToken(login.name);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json(login)
      
  } else{
      res.status(400).json({ msg:"wrong pass" })
  }}
  catch (error) {
      res.status(400).json({ error: error.message });
  }
  }
  if (login1){
    try{if(await bcrypt.compare(Password,login1.Password)){
      
        console.log("successful");
    const token = createToken(login1.name);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json(login1)
    
} else{
    res.status(400).json({ msg:"wrong pass" })
}}
catch (error) {
    res.status(400).json({ error: error.message });
}
}
if (login2){
  try{if(Password == login2.Password){
    
      console.log("successful");
  const token = createToken(login2.name);
  res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
  res.status(200).json(login2)
  
} else{
  res.status(400).json({ msg:"wrong pass" })
}}
catch (error) {
  res.status(400).json({ error: error.message });
}
}
if (login3){
  try{if(Password == login3.Password){
    
      console.log("successful");
  const token = createToken(login3.name);
  res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
  res.status(200).json(login3)
  
} else{
  res.status(400).json({ msg:"wrong pass" })
}}
catch (error) {
  res.status(400).json({ error: error.message });
}
}
// else{
//       res.status(400).json({ msg:"wrong username" })
//   }
  }
  const logout = async (req, res) => {
      // TODO Logout the user
      console.log("successful")
      const token = createToken("");
      res.cookie('jwt', token, { httpOnly: true, maxAge: 1 });
      res.status(200).json({ msg:"success" })
  }



//export the functions here
// module.exports = {CountrySelector,signUp}
module.exports = {signUp , login , logout , requireAuth}