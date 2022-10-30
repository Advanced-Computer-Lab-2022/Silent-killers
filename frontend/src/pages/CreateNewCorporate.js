import { useState } from "react"
//addcorporatetrainee
const CreateNewCorporate = () => {
    const [Username,setUsername] = useState('')
    const [Password,setPassword] = useState('')
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const instructor = {Username,Password}
      //??
      const response = await fetch('/api/Admin/addCorporateTrainee', {
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
        console.log('new CorporateTrainee added:', json)
      }
  
    }
  
    return (
      <form className="create" onSubmit={handleSubmit}> 
        <h3>create New Corporate Trainee</h3>
  
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
  
  
    
    export default CreateNewCorporate