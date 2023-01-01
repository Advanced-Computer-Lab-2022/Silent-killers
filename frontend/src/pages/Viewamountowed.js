import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Viewamountowed = () => { 

  const [amount,setamount] = useState(null)
    
  const params = new URLSearchParams(window.location.search);
  //const userId = params.get('id');
  // const userId = "63583aeb96f0aefb12992977"
  // console.log(userId);
 
  
      

    
      const ttt =  async () => {
        //console.log("i get in here!")
        await axios.post(`http://localhost:8000/api/Instructor/Viewamountowed/?id=${localStorage.getItem("user")}`).then(
          (res) => { 
              //console.log(res.data)
          var convertIntoArray = [];
          var element= 0;
          for (let i = 0; i < res.data.length; i++) {
            element = res.data[i].CoursePrice*0.5 + element; 
          }
          setamount(element)
        
        }
           );
         
    }

   

    
  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
        
      </div>
     <button onClick={ttt} >View Amount Owed</button>  
     
     <p>Amount : {amount}</p>
    </div>
    
  );
}
  export default Viewamountowed;