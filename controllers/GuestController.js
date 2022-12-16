const Guest = require('../models/Guest')
const mongoose = require('mongoose')
// import React, { useState, useMemo } from 'react'
//import Select from 'react-select'
//import countryList from 'react-select-country-list'
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const maxAge = 3 * 24 * 60 * 60;
const createToken = (name) => {
    return jwt.sign({ name }, 'supersecret', {
        expiresIn: maxAge
    });
};
const signUp = async (req, res) => {
    const { username, password,firstname,lastname,gender,type } = req.body;
    if(type==0){
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await Guest.create({ username,hashedPassword,firstname,lastname,gender,type });
        const token = createToken(user.Username);

        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    } 
    else{
      res.status(400).json({ msg:"You need to be an individual trainee" })
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
  const {name,password}=req.body;
  const login=await Guest.findOne({name:name});
  if (login){
      try{if(await bcrypt.compare(password,login.Password)){
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
  }else{
      res.status(400).json({ msg:"wrong username" })
  }
  }
  const logout = async (req, res) => {
      // TODO Logout the user
      const token = createToken("");
      res.cookie('jwt', token, { httpOnly: true, maxAge: 1 });
      res.status(200).json({ msg:"success" })
  }

//functions here
// function CountrySelector() {
//     const [value, setValue] = useState('')
//     const options = useMemo(() => countryList().getData(), [])
  
//     const changeHandler = value => {
//       setValue(value)
//     }
    
//     return <Select options={options} value={value} onChange={changeHandler} />
//   }





//export the functions here
module.exports = {signUp,login,logout,requireAuth}