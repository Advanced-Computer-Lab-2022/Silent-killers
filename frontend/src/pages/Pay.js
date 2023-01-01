import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const Pay = () => { 

    
  // const params = new URLSearchParams(window.location.search);
  // const userId = params.get('id');
  // console.log(userId); 

  const [Price,Setprice] = useState(null);
  const [Complete,SetComplete] = useState(null);
  // const params = new URLSearchParams(window.location.search);
  console.log(localStorage.getItem("user"))
  const CourseID = "63583c7b96f0aefb129976e6"
  console.log(CourseID);

      
  
      const setbio =  async () => {
        console.log("i get in here!")
        console.log(Price)
        
           await axios.post(`http://localhost:8000/api/IndividualTrainee/createpayment?userid=${localStorage.getItem("user")}&courseid=${localStorage.getItem("course")}`, {price:Price}).then(
          (res) => { 
              console.log(res.data)
              //console.log(email)
              
              
          }
           );

    }

  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      <input type="number"  value= {Price} onChange={(e)=>{Setprice(e.target.value)}} /> <br /><br />
    
        <button onClick={setbio} >pay for course</button>  
      <p>  <Link to="/creditcard"> Use a Credit Card</Link></p>
     
      </div>
    </div>
  );
}
  export default Pay;