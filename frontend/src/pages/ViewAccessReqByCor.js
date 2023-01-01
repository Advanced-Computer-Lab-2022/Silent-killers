import React, { useEffect, useState } from 'react'
import axios from 'axios';


const ViewAccessReqByCor = () => { 


  const [results,setresults] = useState(null)
//   const [email,setEmail] = useState(null);
 
      
  
      const setbio =  async () => {
        console.log("i get in here!")
        
           await axios.get(`http://localhost:8000/api/Admin/getAccessReq`).then(
          (res) => { 
            console.log(res.data)
            console.log(results)
          var convertIntoArray = [];
          for (var i = 0; i < res.data.length; i++) {
             convertIntoArray.push("Trainee ID:    ")
             convertIntoArray.push(res.data[i].TraineeID);
             convertIntoArray.push("    Course ID:    ")
             convertIntoArray.push(res.data[i].CourseID);
             convertIntoArray.push("    Status:    ")
             convertIntoArray.push(res.data[i].Status);
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
      <label>All Course Access Requests</label>
    
      {/* <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br /> */}
        
        <button onClick={setbio} >View</button>  
        <p> {results}</p>
      </div>
    </div>
  );
}
  export default ViewAccessReqByCor;