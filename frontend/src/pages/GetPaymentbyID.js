import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const GetpaymentbyId = () => { 

    
   const params = new URLSearchParams(window.location.search);
   const id = params.get('id');
   console.log(id);

  //const [Price,setPrice] = useState(null);
  const [results,setresults] = useState(null)
//   const [email,setEmail] = useState(null);
 
      
    localStorage.setItem("payment" , id);
    console.log(localStorage.getItem("payment"));
      const setbio =  async () => {
        console.log("i get in here!")
        //console.log(Price)
        
           await axios.post(`http://localhost:8000/api/IndividualTrainee/viewpaymentbyid?id=${localStorage.getItem("payment")}`).then(
          (res) => { 
           // setresults(res.data)
            //setresults(Object.entries(res.data));
            //setresults(entries);  
            //console.log(entries)
            console.log(res.data)
           // console.log(results)
              //console.log(results.Title)
              //console.log(email)
              
              var convertIntoArray = [];
            convertIntoArray.push("Course Id:             ")
            convertIntoArray.push(res.data.CourseId);
            convertIntoArray.push("    Course price    ")
            convertIntoArray.push(res.data.CoursePrice);
            
            convertIntoArray.push("-----------------------------------------------------------")
         
          console.log(convertIntoArray);
          setresults(convertIntoArray);
          console.log(results);
          }
           );
          


    }

  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      {/* <label>Price: </label>
      <input type="text" value= {Price} onChange={(e)=>{setPrice(e.target.value)}} Price/> <br /><br /> */}
      {/* <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br /> */}
        <button onClick={setbio} >View payment Details</button>  
        <Link to="/refund">refund </Link>
		
        <p> {results}</p>
      </div>
    </div>
  );
}
  export default GetpaymentbyId;