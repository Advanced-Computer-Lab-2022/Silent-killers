import React, { useEffect, useState } from 'react'
import Getinstructors from './Getinstructors';

const Editpass=()=>
{const params = new URLSearchParams(window.location.search);
  const userId = params.get('userId');
const [password, setName] = useState("");
useEffect(() => {
  let item={password}
  console.warn("item",item)
  fetch(`/api/Instructor/changepass/userId=${userId}`, {
    method: 'PATCH',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(item)
  }).then((result) => {
    result.json().then((resp) => {
      console.warn(resp)
      Getinstructors()
    })
  })})

  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      <input type="text" value={password} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        
        <button onClick={Editpass} >edit password</button>  
      </div>
    </div>
  );
}
  export default Editpass;