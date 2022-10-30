import { useState } from "react"
//addinstructor
const CreateNewInstructor = () => {
    const [Username,setUsername] = useState('')
    const [Password,setPassword] = useState('')
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const instructor = {Username,Password}
      //??
      const response = await fetch('/api/Admin/addInstructor', {
        method: 'POST',
        body: JSON.stringify(instructor),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
  
      // if (!response.ok) {
      //   setError(json.error)
      // }
      if (response.ok) {
       // setError(null)
        setUsername('')
        setPassword('')
        console.log('new Instructor added:', json)
      }
  
    }
  
    return (
      <form className="create" onSubmit={handleSubmit}> 
        <h3>create New Instructor</h3>
  
        <label>Username:</label>
        <input 
          type="text" 
          onChange={(e) => setUsername(e.target.value)} 
          value={Username}
        />
  
      <label>Password</label>
        <input 
          type="text" 
          onChange={(e) => setPassword(e.target.value)} 
          value={Password}
        />
  
        
  
        <button>Add User</button>
      </form>
    )
  }
  
  
    
    export default CreateNewInstructor