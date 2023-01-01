import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AdminRefundingWallets = () => { 

    
   const params = new URLSearchParams(window.location.search);
   const id1 = params.get('id');
   const courseId = params.get('courseId')
   console.log(id1);
   console.log(courseId);
  const [results,setresults] = useState(null)
//   const [email,setEmail] = useState(null);
 
      
  
      const setbio =  async () => {
        console.log("i get in here!")
        
           await axios.patch(`http://localhost:8000/api/Admin/Adminrefund?idRef=${id1}`).then(
          (res) => { 
            console.log(res.data)
           
              
          var convertIntoArray = ["Trainee ID:  ",res.data.TraineeID,
           "   /  Amount in wallet:    ",res.data.Amount ];

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
      <label>For Refund : </label>        
        <button onClick={setbio} >Click here</button>  
        <p> {results}</p>
      </div>
    </div>
  );
}
  export default AdminRefundingWallets;