import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './Login';
const Logout = () => { 
//   const [email,setEmail] = useState(null);
const navigate = useNavigate();
      
  
      const setbio =  async () => {
        console.log("i get in here!")
        
           await axios.get(`http://localhost:8000/api/Guest/logout`).then(
          )
          navigate('/login');
          
           ;

    }

  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      <label>logout </label>
      {/* <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br /> */}
        
        <button onClick ={setbio} >log out</button>  
        
      </div>
    </div>
  );
}
  export default Logout;