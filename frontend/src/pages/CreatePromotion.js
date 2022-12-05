import { useState } from "react"
const Createpromotion = () => {
    const [Username,setUsername] = useState('')
    const [Password,setPassword] = useState('')
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const instructor = {Username,Password}
      //??
      const response = await fetch('/api/Instructor/adddiscount/:id', {
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
        console.log('promotion added:', json)
      }
  
    }
  
    return (
      <form className="create" onSubmit={handleSubmit}> 
        <h3>create promotion</h3>
  
        <label>discount:</label>
        <input 
          type="text" 
          onChange={(e) => setUsername(e.target.value)} 
          value={Username}
        />
  
      <label>number of days:</label>
        <input 
          type="text" 
          onChange={(e) => setPassword(e.target.value)} 
          value={Password}
        />
  
        
  
        <button>Add promotion</button>
      </form>
    )
  }
export default Createpromotion