//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
  const ViewTraineeGrade = () => {
  const [trainee,settrainee] = useState('')

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = 'Results1'; 
    navigate(path);
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    
    const sol = {trainee}
    //??
    const response = await fetch('/api/CorporateTrainee/viewgrade', {
      method: 'POST',
      body: JSON.stringify(sol),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

  
    if (response.ok) {
     settrainee('')
     console.log(json)
    
    }

   

    
  }

  return (
    
    <form className="view grades" onSubmit={handleSubmit}> 
      <h3>view trainee grade </h3>

      <label>Trianee</label>
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


  
  export default ViewTraineeGrade