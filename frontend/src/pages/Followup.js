import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Followup = () => {
  const params = new URLSearchParams(window.location.search);
  const [comment,setcomment] = useState(null)
  const [preview,setpreview] = useState(null)
  
  const report = params.get('report')
  //const userId = params.get('id');
 
  
      

    
      const ttt =  async () => {
        console.log("i get in here!")
        await axios.patch(`http://localhost:8000/api/Instructor/followup/?id=${report}`,{comment:comment}).then(
          (res) => {          
          console.log(res.data)  
          setpreview("Comment Sent")
          if(res.data=="Report Already Resolved"){
            setpreview("Report Already Resolved")
          }
        
        }
           );
         
    }

    
    
  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      <p>Follow Up</p>
      <label>Comment </label>
      <input type="Comment" value={comment} onChange={(e)=>{setcomment(e.target.value)}} /> <br /><br />
      </div>
     <button onClick={ttt} >Submit Comment</button>  
     <p> {preview}</p>

     
    
    </div>
    
  );
}
  export default Followup;