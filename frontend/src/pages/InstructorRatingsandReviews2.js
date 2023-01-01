import React, { useEffect, useState } from 'react'
import axios from 'axios';

const InstructorRatingsandReviews2 = () => { 

    
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
//   console.log(userId);

  //const [Price,setPrice] = useState(null);
  const [results,setresults] = useState(null)
//   const [email,setEmail] = useState(null);
 
      
  
      const setbio =  async () => {
        console.log("i get in here!")
        //console.log(Price)
        
           await axios.post(`http://localhost:8000/api/Instructor/getinsbyid/?id=${id}`).then(
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
          for (var i = 0; i < res.data.length; i++) {
            convertIntoArray.push("Ratings :    ")
             convertIntoArray.push(res.data[i].Rating);
             convertIntoArray.push("    Reviews:    ")
             convertIntoArray.push(res.data[i].Reviews);
             convertIntoArray.push("-----------------------------------------------------------")
          }
          console.log(convertIntoArray);
          setresults(convertIntoArray)
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
        
        <button onClick={setbio} >View Instructor Ratings and Reviews</button>  
        <p> {results}</p>
      </div>
    </div>
  );
}
  export default InstructorRatingsandReviews2;