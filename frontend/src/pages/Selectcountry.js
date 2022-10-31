import React, { useState, useMemo } from "react"
import Select from "react-select"
import countryList from "react-select-country-list"
// import { useEffect, useState } from "react"
import Coursedetails from "../components/Coursedetails"

  

function Selectcountry() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h1>Please select your country:</h1>
      <Select options={options} value={value} onChange={changeHandler} />
      <p>The country code is: {value.value}</p>
      <p>The country name is: {value.label}</p>
    </div>
  );
  
}

  
  export default Selectcountry;