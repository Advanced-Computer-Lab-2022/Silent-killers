import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Creditcard = () => { 


  const [Creditnumber,setCreditno] = useState(null);
  const [ExpirationMonth,setExpirationMonth] = useState(null);
  const [ExpirationYear,setExpirationYear]=useState(null);
 
      
  
      const setbio =  async () => {
        console.log(localStorage.getItem("user"))
        console.log("i get in here!")
        
           await axios.patch(`http://localhost:8000/api/IndividualTrainee/creditcard?id=${localStorage.getItem("user")}`, {Creditnumber:Creditnumber,ExpirationMonth:ExpirationMonth,ExpirationYear:ExpirationYear}).then(
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
      <label>credit number</label>
      <input type="text" value= {Creditnumber} onChange={(e)=>{setCreditno(e.target.value)}} /> <br /><br />
      <label>expiration month</label>
      <input type="number" value={ExpirationMonth} onChange={(e)=>{setExpirationMonth(e.target.value)}} /> <br /><br />
      <label>expiration year</label>
      <input type="number" value={ExpirationYear} onChange={(e)=>{setExpirationYear(e.target.value)}} /> <br /><br />
        <button onClick={setbio} >pay with credit card</button>  
      </div>
    </div>
  );
}
  export default Creditcard;