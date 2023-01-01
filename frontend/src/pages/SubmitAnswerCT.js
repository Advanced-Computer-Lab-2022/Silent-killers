import React, { useEffect, useState } from 'react'
import axios from 'axios';



const SubmitAnswerCT = () => { 

    
  const params = new URLSearchParams(window.location.search);
  // const userId = params.get('id');
  // console.log(userId);
  const [answer,setanswer] = useState([])

 
      
    //check path 
      const submitanswer =  async () => {
           await axios.patch(`http://localhost:8000/api/CorporateTrainee/submitanswerCT/?id=${localStorage.getItem("Exercise")}`,{answer:answer}).then(
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
      <input type="answer" value={answer} onChange={(e)=>{setanswer(e.target.value)}} /> <br /><br />
        
        <button onClick={submitanswer} >Submit Answer</button>  
      </div>
    </div>
  );
}
  export default SubmitAnswerCT;