import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ReportINS = () => { 

  const [problem,setproblem] = useState(null)
  const [course,setcourse] = useState(null)
  const params = new URLSearchParams(window.location.search);
  //const userId = params.get('id');
  
  const userId = "63583aeb96f0aefb12992977"
  console.log(userId);
 
  
      

    
      const ttt =  async () => {
        console.log("i get in here!")
        await axios.post(`http://localhost:8000/api/Instructor/reportINS/?id=${userId}`,{problem:problem,course:course}).then(
          (res) => {          
          console.log(res.data)  
        
        }
           );
         
    }

    const t1 =  async () => {
        setproblem("technical")
    }
    const t2 =  async () => {
        setproblem("financial")
    }

    
  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      <p>Problem: {problem}</p>
      <button onClick={t1} >Technical</button>
      <p></p>
      <button onClick={t2} >Financial</button>
      <p></p>
      <label> Other :</label>
      <input type="problem" value={problem} onChange={(e)=>{setproblem(e.target.value)}} /> <br /><br />

        <label>Course </label>
      <input type="Course" value={course} onChange={(e)=>{setcourse(e.target.value)}} /> <br /><br />
      </div>
     <button onClick={ttt} >Submit Report</button>  

     
    
    </div>
    
  );
}
  export default ReportINS;