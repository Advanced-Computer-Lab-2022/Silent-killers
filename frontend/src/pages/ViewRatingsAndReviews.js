import React, { useEffect, useState } from 'react'
import axios from 'axios';
//import Pricedetails from "../components/priceofcourse"

const ViewRatingandReviews = () => { 

  const [Ratings,setRatings] = useState(null)
    
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('id');
  console.log(userId);
 
  
      

    
      const ttt =  async () => {
        console.log("i get in here!")
        await axios.get(`http://localhost:8000/api/Instructor/viewratingsandreviews/?id=${localStorage.getItem("user")}`).then(
          (res) => { 
              //console.log(res.data)
          var convertIntoArray = [];
          for (var i = 0; i < res.data.length; i++) {
            convertIntoArray.push("Title :")
             convertIntoArray.push(res.data[i].Title);
             convertIntoArray.push("----Reviews  :")
             convertIntoArray.push(res.data[i].Reviews);
             convertIntoArray.push("----Rating  :")
             convertIntoArray.push(res.data[i].Rating);
             convertIntoArray.push("---------------------------------------------------------------------------------------------------------------------")
            
          }
          console.log(convertIntoArray);
          setRatings(convertIntoArray)



          }
           );
         
    }

   

    
  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
        
      </div>
     <button onClick={ttt} >View Ratings</button>  
     {/* <button onClick={<p>{Grades}</p>} >tttt siuu</button> */}
     
     <p>Ratings {Ratings}</p>
    </div>
    
  );
}
  export default ViewRatingandReviews;