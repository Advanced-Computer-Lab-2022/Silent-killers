import React, { useEffect, useState } from 'react'
import axios from 'axios';



const SetAnswer2 = () => { 

    
  const params = new URLSearchParams(window.location.search);
  // const userId = params.get('id');
  // console.log(userId);
  const [answer1,setanswer1] = useState([])

 
        //check path 
  
      const setanswer =  async () => {
           await axios.patch(`http://localhost:8000/api/Instructor/setanswer/?id=${localStorage.getItem("Exercise")}`,{answer1:answer1}).then(
          (res) => { 
            //console.log(res.data)
              
          }
           );

    }

  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      <label>Answer </label>
      <input type="answer" value={answer1} onChange={(e)=>{setanswer1(e.target.value)}} /> <br /><br />

        
        <button onClick={setanswer} >Set Answer</button>  
      </div>
    </div>
  );
}
  export default SetAnswer2;