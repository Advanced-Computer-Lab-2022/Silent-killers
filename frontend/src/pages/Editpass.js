import React, { useEffect, useState } from 'react'
import axios from 'axios';



const Editpass = () => { 

    
  // const params = new URLSearchParams(window.location.search);
  const [password,setPassword] = useState([]);

 
      
  
      const changepass =  async () => {
        console.log(localStorage.getItem("user"))
           await axios.patch(`http://localhost:8000/api/Instructor/EditPassword?id=${localStorage.getItem("user")}`,{password:password}).then(
          (res) => { 
            console.log(res.data)
              
          }
           );

    }

  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      <p>Enter new Password</p>
      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br /><br />
        
        <button onClick={changepass} >edit password</button>  
      </div>
    </div>
  );
}
  export default Editpass;