import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ViewandAccept2 = () => { 

    
//   const params = new URLSearchParams(window.location.search);
//   const userId = params.get('id');
//   console.log(userId);

//  const [Instructor,setInstructor] = useState(null);
const [results,setresults] = useState(null)
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
//   const [email,setEmail] = useState(null);
 
      const Accept =async ()=>{
        await axios.post(`http://localhost:8000/api/Instructor/AcceptContract/?id=${localStorage.getItem("user")}`)
      }
  
      const setbio =  async () => {
        console.log("i get in here!")
        //console.log(Price)
        
           await axios.post(`http://localhost:8000/api/Instructor/getinsbyid/?id=${localStorage.getItem("user")}`).then(
          (res) => { 
           // setresults(res.data)
            //setresults(Object.entries(res.data));
            //setresults(entries);  
            //console.log(entries)
            console.log(res.data)
           // console.log(res.data.length)
            //console.log(results)
              //console.log(results.Title)
              //console.log(email)
              
        var convertIntoArray = [];
        //   for (var i = 0; i < 20; i++) {
            // convertIntoArray.push("Contract:    ")
            //  convertIntoArray.push(res.data[i].Contract);
         // }
         var convertIntoArray2 = ["Contarct:    ",res.data.Contract,
         "-----------------------------------------------------------"
        ];
         //convertIntoArray.push(res.data[0]);
          
         console.log(convertIntoArray2);
          setresults(convertIntoArray2)
          }
           );

    }

  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      {/* <label>Price: </label>
      <input type="text" value= {Price} onChange={(e)=>{setPrice(e.target.value)}} Price/> <br /><br /> */}
      {/* <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br /> */}
        
        <button onClick={setbio} >View contract</button>  
        <p> {results}</p>
        <button onClick={Accept} >Accept Contract</button>  
      </div>
    </div>
  );
}
  export default ViewandAccept2;