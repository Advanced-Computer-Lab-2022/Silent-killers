import React, { useEffect, useState } from 'react'
import axios from 'axios';


const ViewTraineewalletamount = () => { 

  const [Amount,setAmount] = useState(null)
    
  //const params = new URLSearchParams(window.location.search);
  //const id = "6386303cf3aa6d3ac14863f2";
  //console.log(id);
 
  
      

    
      const ttt =  async () => {
        console.log("i get in here!")
        await axios.get(`http://localhost:8000/api/IndividualTrainee/getwallet?id=${localStorage.getItem("user")}`).then(
          (res) => { 
              //console.log(res.data)
             
          var convertIntoArray = [];
          for (var i = 0; i < res.data.length; i++) {
             convertIntoArray.push(res.data[i].Amount);
          }
          console.log(convertIntoArray);
          if(!Amount){
            setAmount(0);
          }
          else{
          setAmount(convertIntoArray)
          }


          }
           );
         
    }

   

    
  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
        
      </div>
     <button onClick={ttt} >View Amount</button>  
     {/* <button onClick={<p>{Grades}</p>} >tttt siuu</button> */}
     
     <p>Wallet Balance:  {Amount}</p>
    </div>
    
  );
}
  export default ViewTraineewalletamount;