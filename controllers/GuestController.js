const Guest = require('../models/Guest')
const mongoose = require('mongoose')
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

//functions here
function CountrySelector() {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
    }
    
    return <Select options={options} value={value} onChange={changeHandler} />
  }





//export the functions here
module.exports = {CountrySelector}