import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ReportCT = () => { 
  const params = new URLSearchParams(window.location.search);
  const course = params.get('courseid')
  const coursetitle = params.get('coursetitle')
  const [problem,setproblem] = useState(null)
  
      const ttt =  async () => {
        console.log("i get in here!")
        await axios.post(`http://localhost:8000/api/CorporateTrainee/reportCT/?course=${course}&coursetitle=${coursetitle}&id=${localStorage.getItem("user")}`,{problem:problem}).then(
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
      <label> Other </label>
      <input type="problem" value={problem} onChange={(e)=>{setproblem(e.target.value)}} /> <br /><br />
      </div>
     <button onClick={ttt} >Submit Report</button>



    </div>

  );
}
  export default ReportCT;