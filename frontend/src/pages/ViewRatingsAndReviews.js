//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
  const ViewRatingsAndReviews = () => {
  const [trainee,settrainee] = useState('')

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = 'Results2'; 
    navigate(path);
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    
    //const sol = {trainee}
    //??
//    const response = await fetch('/api/Course/getcourses', {
//       method: 'POST',
//       body: JSON.stringify(sol),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }) 
   // const json = await response.json()

  
    // if (response.ok) {
    //  settrainee('')
    //  console.log(json)
    
    // }

   

    
  }

  return (
    
    <form className="view rating and reviews" onSubmit={handleSubmit}> 
      <h3>view rating and reviews</h3>

      <label>ID</label>
      <input 
        type="text" 
        onChange={(e) => settrainee(e.target.value)} 
        value={trainee}
      />

      

     {/* <button onClick={handleClick} >view</button> */}
      <button color="primary" className="px-4"
                onClick={routeChange}
                  >
                  view
                </button>
      <div>

      </div>
    </form>
  )
}


  
  export default ViewRatingsAndReviews