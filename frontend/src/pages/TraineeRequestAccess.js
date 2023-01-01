import React, { useEffect, useState } from 'react'
import axios from 'axios';


const TraineeRequestAccess = () => { 

  //const [Amount,setAmount] = useState(null)
    
  const params = new URLSearchParams(window.location.search);
  const TraineeID = params.get('TraineeID');
  console.log(TraineeID);
  const CourseID = params.get('CourseID');
  console.log(CourseID);
 
  
      

    
      const ttt =  async () => {
        console.log("i get in here!")
        await axios.post(`http://localhost:8000/api/CorporateTrainee/requestaccess?TraineeID=${TraineeID}&CourseID=${CourseID}`).then(
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
  export default TraineeRequestAccess;