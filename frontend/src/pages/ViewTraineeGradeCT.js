import React, { useEffect, useState } from 'react'
import axios from 'axios';
//import Pricedetails from "../components/priceofcourse"

const ViewTraineeGradeCT = () => { 

  const [Grades,setGrades] = useState(null)
    
  const params = new URLSearchParams(window.location.search);
  //const userId = params.get('id');
  //console.log(userId);
 
  
      

    
      const ttt =  async () => {
        console.log("i get in here!")
        await axios.post(`http://localhost:8000/api/CorporateTrainee/viewgradeCT/?id=${localStorage.getItem("user")}`).then(
          (res) => { 
              //console.log(res.data)
          var convertIntoArray = [];
          for (var i = 0; i < res.data.length; i++) {
            convertIntoArray.push("Course Title  :")
            convertIntoArray.push(res.data[i].CourseTitle);
             convertIntoArray.push("----Exercise Number :")
             convertIntoArray.push(res.data[i].ExerciseNumber);
             convertIntoArray.push("----Correct Solutions  :")
             convertIntoArray.push(res.data[i].CorrectSolutions);
             convertIntoArray.push("----Grade : ")
             convertIntoArray.push(res.data[i].Grade);
             convertIntoArray.push("-------------------------------------")
          }
          console.log(convertIntoArray);
          setGrades(convertIntoArray)



          }
           );
         
    }

   

    
  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
        
      </div>
     <button onClick={ttt} >View Grade</button>  
     {/* <button onClick={<p>{Grades}</p>} >tttt siuu</button> */}
     
     <p>Grades {Grades}</p>
    </div>
    
  );
}
  export default ViewTraineeGradeCT;