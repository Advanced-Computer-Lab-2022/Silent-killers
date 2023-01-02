import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Writenotes = () => { 

    

  const [Notes,setNotes] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const CourseId = params.get('CourseId') ;
//const StudentId = params.get('StudentId');

 
      
  
      const setbio =  async () => {
        console.log("i get in here!")
        //console.log(Price)
        
           await axios.patch(`http://localhost:8000/api/IndividualTrainee/writenotes?StudentId=${localStorage.getItem("user")}&CourseId=${CourseId}`, {notes:Notes}).then(
          (res) => { 
           // setresults(res.data)
            //setresults(Object.entries(res.data));
            //setresults(entries);  
            //console.log(entries)
            //console.log(res.data)
           // console.log(results)
              //console.log(results.Title)
              //console.log(email)
          }
           );

    }

  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      <label>Notes: </label>
      <input type="text" value= {Notes} onChange={(e)=>{setNotes(e.target.value)}} Price/> <br /><br />
      {/* <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br /> */}
        
        <button onClick={setbio} >Add Notes</button>  
        {/* <p> {results}</p> */}
      </div>
    </div>
  );
}
  export default Writenotes;