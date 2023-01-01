import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AddPreview3 = () => { 

    
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('id');
  console.log(userId);

  const [link,setlink] = useState(null);

 
      
  
      const setbio =  async () => {
        console.log("i get in here!")
        console.log(link)
        
           await axios.patch(`http://localhost:8000/api/Instructor/addpreviewvid?id=${userId}`, {PreviewVideo:link}).then(
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
      <input type="text" value= {link} onChange={(e)=>{setlink(e.target.value)}} /> <br /><br />
      {/* <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br /> */}
        
        <button onClick={setbio} >Add link</button>  
      </div>
    </div>
  );
}
  export default AddPreview3;