import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Viewanswersandcorrectsol = () => { 

    
//   const params = new URLSearchParams(window.location.search);
//   const userId = params.get('id');
//   console.log(userId);

  const [Username,setUsername] = useState(null);
  const [results,setresults] = useState(null)
  const [Exerciseno,setExerciseno] = useState(null);
 
      
  
      const setbio =  async () => {
        console.log("i get in here!")
        //console.log(Price)
        
           await axios.post(`http://localhost:8000/api/IndividualTrainee/viewanswers`,{Username:Username,Exerciseno:Exerciseno}).then(
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
            convertIntoArray.push("Questions:    ")
             convertIntoArray.push(res.data[i].Questions);
             convertIntoArray.push("    Correct Solution:    ")
             convertIntoArray.push(res.data[i].CorrectSolutions);
             convertIntoArray.push("    Trainee Solutions:    ")
             convertIntoArray.push(res.data[i].TraineeSolutions);
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
      <label>Username: </label>
      <input type="text" value= {Username} onChange={(e)=>{setUsername(e.target.value)}} Price/> <br /><br />
      <label>Exercise Number: </label>
      <input type="text" value={Exerciseno} onChange={(e)=>{setExerciseno(e.target.value)}} /> <br /><br />
        
        <button onClick={setbio} >View Solutions</button>  
        <p> {results}</p>
      </div>
    </div>
  );
}
  export default Viewanswersandcorrectsol;