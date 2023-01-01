import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const OpenExecise = () => { 

    const navigate=useNavigate();

   const params = new URLSearchParams(window.location.search);
   const id = params.get('id');
   console.log(id);
   localStorage.setItem("Exercise" , id);

  const [results,setresults] = useState(null)
  
    
    //console.log(localStorage.getItem("course"));
      const setbio =  async () => {
        console.log("i get in here!")
        //console.log(Price)
        if(localStorage.getItem("Type") == 1){
            navigate('/setanswer2');
        }
        if(localStorage.getItem("Type") == 2||localStorage.getItem("Type") == 3){
            navigate('/submitAnswerCT');
        }

    }
    
  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      {/* <label>Price: </label>
      <input type="text" value= {Price} onChange={(e)=>{setPrice(e.target.value)}} Price/> <br /><br /> */}
      {/* <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br /> */}
        <button onClick={setbio} >Continue</button>  
        
      </div>
    </div>
  );
}
  export default OpenExecise;