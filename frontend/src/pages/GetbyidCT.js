import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
const GetbyidCT = () => { 
  const [results,setresults] = useState(null)
//   const [email,setEmail] = useState(null);
 
      
  
      const setbio =  async () => {
        console.log("i get in here!")
        console.log(localStorage.getItem("user"))
        
           await axios.post(`http://localhost:8000/api/IndividualTrainee/enrollid?id=${localStorage.getItem("user")}`).then(
          (res) => { 
            console.log(res.data)
            // console.log(results)
              var convertIntoArray = [];
          for (var i = 0; i < res.data.length; i++) {
            convertIntoArray.push("course id:    ")
             convertIntoArray.push(res.data[i].CourseId);
             convertIntoArray.push("   student id:    ")
             convertIntoArray.push(res.data[i].StudentId);
             convertIntoArray.push("    lesson id:    ")
             convertIntoArray.push(res.data[i].LessonId);
             convertIntoArray.push("   completed:    ")
             convertIntoArray.push(res.data[i].Completed);
             convertIntoArray.push("-----------------------------------------------------------")
          }
          console.log(convertIntoArray);
          setresults(res.data)
          }
           );

    }

  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      
      {/* <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br /> */}
        
        <button onClick={setbio} >get by id</button>  
        <div className="card">
  <div className="container">
    {
    results != null ? (results.map(e=>
      {
        return(
          <>
          <h2>course id:{e.CourseId}</h2>
         <p>Student id:{e.StudentId}</p>
          <p>lesson id:{e.LessonId}</p>
          <p>Completed:{e.Completed}</p>
          {e.Completed>=100 ? (<Link to="/downloadpdf">Download Certificate as a pdf</Link>):("")}
          {e.Completed>=100 ? (<Link to="/pdf">Receive Certificate via email</Link>):("")}
          <button onClick={() => window.location.href=`/writenotes2/?CourseId=${e.CourseId}`}> Write Notes</button>
          <p><Link to="/watchvideo">Watch video</Link></p>
          <p><Link to="/vieweachdetailcourse">Open all course items</Link></p>

          </>
        )
      })) : ("")

      
    }
  </div>
</div>
      </div>
    </div>
  );
}
  export default GetbyidCT;