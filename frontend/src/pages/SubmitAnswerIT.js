import React, { useEffect, useState } from 'react'
import axios from 'axios';



const SubmitAnswerIT = () => { 

    
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('id');
  console.log(userId);
  const [answer,setanswer] = useState([])
  const [exercisenumber,setexercise] = useState([])

 
      
  //check path 
      const submitanswer =  async () => {
           await axios.patch(`http://localhost:8000/api/IndividualTrainee/submitanswerIT/?id=${userId}`,{answer:answer}).then(
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
      <label>Exercise Number </label>
      <input type="Exercise number" value={exercisenumber} onChange={(e)=>{setexercise(e.target.value)}} /> <br /><br />
        
        <button onClick={submitanswer} >Submit Answer</button>  
      </div>
    </div>
  );
}
  export default SubmitAnswerIT;