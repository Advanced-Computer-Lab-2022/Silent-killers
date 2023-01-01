import React, { useEffect, useState } from 'react'
import axios from 'axios';


const TraineeRequestAccess2 = () => { 

  //const [Amount,setAmount] = useState(null)
    
  //const params = new URLSearchParams(window.location.search);
  //const TraineeID = "6386303cf3aa6d3ac14863f2";
  //console.log(TraineeID);
  const CourseID = "63583c7b96f0aefb129976e6";
  console.log(CourseID);
 
  
      

    
      const ttt =  async () => {
        console.log("i get in here!")
        await axios.post(`http://localhost:8000/api/CorporateTrainee/requestaccess?TraineeID=${localStorage.getItem("user")}&CourseID=${localStorage.getItem("course")}`).then(
          (res) => { 
              //console.log(res.data)
        //   var convertIntoArray = [];
        //   for (var i = 0; i < res.data.length; i++) {
        //      convertIntoArray.push(res.data[i].Amount);
        //   }
        //   console.log(convertIntoArray);
        //   setAmount(convertIntoArray)



          }
           );
         
    }

   

    
  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
        
      </div>
     <button onClick={ttt} >Request Access</button>  
     {/* <button onClick={<p>{Grades}</p>} >tttt siuu</button> */}
     
     {/* <p>Wallet Balance:  {Amount}</p> */}
    </div>
    
  );
}
  export default TraineeRequestAccess2;