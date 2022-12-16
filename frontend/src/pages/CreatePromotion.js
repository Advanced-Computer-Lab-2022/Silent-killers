import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Createpromotion = () => { 

    
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('id');
  console.log(userId);
  const [discount,setdiscount] = useState(null);
  const [nodays,setdays] = useState(null);

 
      
  
  const setdiscountt =  async () => {
    console.log("i get in here!")
    console.log(discount)
    
       await axios.patch(`http://localhost:8000/api/Instructor/adddiscount?id=${userId}`, {discount:discount,noofdays:nodays}).then(
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
      <input type="number" value={discount} onChange={(e)=>{setdiscount(e.target.value)}} /> <br /><br />
      <input type="number" value={nodays} onChange={(e)=>{setdays(e.target.value)}} /> <br /><br />
      <button onClick={setdiscountt} >set discount</button> 
        
        
      </div>
    </div>
  );}

  export default Createpromotion;