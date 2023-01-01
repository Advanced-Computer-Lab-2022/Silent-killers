import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const ViewCoursebyIdredirect = () => { 

    const navigate=useNavigate();

   const params = new URLSearchParams(window.location.search);
   const id = params.get('id');
   console.log(id);

  //const [Price,setPrice] = useState(null);
  const [results,setresults] = useState(null)
//   const [email,setEmail] = useState(null);
 
      
    localStorage.setItem("course" , id);
    console.log(localStorage.getItem("course"));
      const setbio =  async () => {
        console.log("i get in here!")
        //console.log(Price)
        if(localStorage.getItem("Type") == 0){
            navigate('/ViewCoursebyIdAdmin');
        }
        if(localStorage.getItem("Type") == 1){
            navigate('/ViewCoursebyIdINS');
        }
        if(localStorage.getItem("Type") == 2){
            navigate('/ViewCoursebyIdCT');
        }
        if(localStorage.getItem("Type") == 3){
            navigate('/ViewCoursebyIdIT');
        }
         

    }

  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      {/* <label>Price: </label>
      <input type="text" value= {Price} onChange={(e)=>{setPrice(e.target.value)}} Price/> <br /><br /> */}
      {/* <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br /> */}
        
        <button onClick={setbio} >View Course Details</button>  
        <p> {results}</p>
      </div>
    </div>
  );
}
  export default ViewCoursebyIdredirect;