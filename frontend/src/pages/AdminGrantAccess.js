import React, { useEffect, useState } from 'react'
import axios from 'axios';


const AdminGrantAccess = () => { 

  //const [Amount,setAmount] = useState(null)
    
  const params = new URLSearchParams(window.location.search);
  const StudentId = params.get('StudentId');
  console.log(StudentId);
  const CourseId = params.get('CourseId');
  console.log(CourseId);
 
  
      

    
      const ttt =  async () => {
        console.log("i get in here!")
        await axios.patch(`http://localhost:8000/api/Admin/grantaccess?StudentId=${StudentId}&CourseId=${CourseId}`).then(
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
     <button onClick={ttt} >Grant Access</button>  
     {/* <button onClick={<p>{Grades}</p>} >tttt siuu</button> */}
     
     {/* <p>Wallet Balance:  {Amount}</p> */}
    </div>
    
  );
}
  export default AdminGrantAccess;