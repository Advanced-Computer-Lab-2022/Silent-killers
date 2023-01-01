import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const RequestRefundIT = () => { 

    
  // const params = new URLSearchParams(window.location.search);
  

 
      
  
  const setdiscountt =  async () => {
    
    
       await axios.post(`http://localhost:8000/api/IndividualTrainee/refund?payment=${localStorage.getItem("payment")}&user=${localStorage.getItem("user")}&course=${localStorage.getItem("course")}`).then(
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
      <button onClick={setdiscountt} >request refund</button> 
        
        
      </div>
    </div>
  );}

  export default RequestRefundIT;