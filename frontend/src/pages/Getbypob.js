import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Getbypob = () => { 


  const [results,setresults] = useState(null)
//   const [email,setEmail] = useState(null);
 
      
  
      const setbio =  async () => {
        console.log("i get in here!")
        
           await axios.get(`http://localhost:8000/api/Instructor/mostrating`).then(
          (res) => { 
            console.log(res.data)
            console.log(results)
              var convertIntoArray = [];
          for (var i = 0; i < res.data.length; i++) {
            convertIntoArray.push("Title:    ")
             convertIntoArray.push(res.data[i].Title);
             convertIntoArray.push("   TotalHoursOfCourse    ")
             convertIntoArray.push(res.data[i].TotalHoursOfCourse);
             convertIntoArray.push("    Rating:    ")
             convertIntoArray.push(res.data[i].Rating);
             convertIntoArray.push("  Subtitles:    ")
             convertIntoArray.push(res.data[i].Subtitles);
             convertIntoArray.push("  Subject   ")
             convertIntoArray.push(res.data[i].Subject);
             convertIntoArray.push("  Summary  ")
             convertIntoArray.push(res.data[i].Summary);
             convertIntoArray.push("  Exercises  ")
             convertIntoArray.push(res.data[i].Exercises);
             convertIntoArray.push("  Price ")
             convertIntoArray.push(res.data[i].Price);
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
      <label>Most popular courses</label>
    
      {/* <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br /> */}
        
        <button onClick={setbio} >get by pobular</button>  
        <p> {results}</p>
      </div>
    </div>
  );
}
  export default Getbypob;