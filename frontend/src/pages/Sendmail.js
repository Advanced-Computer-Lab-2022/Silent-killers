import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Sendmail= () => { 

  const [Email,setEmail] = useState(null);
//   const [email,setEmail] = useState(null);
 
      
  
      const setbio =  async () => {
        console.log("i get in here!")
        console.log(Email)
        
           await axios.post(`http://localhost:8000/api/Instructor/forgot`,{email:Email}).then(
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
      <label>Email </label>
      <input type="text" value= {Email} onChange={(e)=>{setEmail(e.target.value)}}/> <br /><br />
      {/* <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br /> */}
        
        <button onClick={setbio} >send email</button>  
      </div>
    </div>
  );
}
  export default Sendmail;