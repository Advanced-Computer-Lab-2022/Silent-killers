//import React, { useState, useMemo } from "react"
import Select from "react-select"
import countryList from "react-select-country-list"
import { useEffect, useState } from "react"
import Coursedetails from "../components/Coursedetails"

  

function Home() {
  // const [value, setValue] = useState("");
  // const options = useMemo(() => countryList().getData(), []);

  // const changeHandler = (value) => {
  //   setValue(value);
  // };

  // return (
  //   <div className="App">
  //     <h1>Hello CodeSandbox</h1>
  //     <Select options={options} value={value} onChange={changeHandler} />
  //     <p>The country code is: {value.value}</p>
  //     <p>The country name is: {value.label}</p>
  //   </div>
  // );
    const [Course,setCourse] = useState(null)
  
    useEffect(() => {
      const fetchCourses = async () => {
        const response = await fetch('/api/Course/getcourses')
        const json = await response.json()
  
        if (response.ok) {
          setCourse(json)
        }
      }
  
      fetchCourses()
    }, [])
  
    return (
      <div className="home">
        <div className="Courses">
          {Course && Course.map(Course => (
            <Coursedetails Course={Course} key={Course._id} />
          ))}
        </div>
      </div>
    )
  }
  
  
  export default Home;

