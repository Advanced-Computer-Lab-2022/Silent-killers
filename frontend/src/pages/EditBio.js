import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Editbio = () => { 

    
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('id');
  console.log(userId);

  const [bio,setBio] = useState(null);
  const [email,setEmail] = useState(null);
 
      
  
      const setbio =  async () => {
        console.log("i get in here!")
        console.log(bio)
        
           await axios.patch(`http://localhost:8000/api/Instructor/EditBio?id=${userId}`, {biography:bio,email:email}).then(
          (res) => { 
              console.log(res.data)
              //console.log(email)
              
              
          }
           );

    }

  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      <input type="text" value= {bio} onChange={(e)=>{setBio(e.target.value)}} /> <br /><br />
      <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br />
        
        <button onClick={setbio} >set email and biography</button>  
      </div>
    </div>
  );
}
  export default Editbio;