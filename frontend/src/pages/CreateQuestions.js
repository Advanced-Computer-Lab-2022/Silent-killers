import { useState } from "react"
const Createquestions = () => {
  const [Question,setquestion] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newquestion = {Question}
    //??
    const response = await fetch('/api/Instructor/addquestion', {
      method: 'POST',
      body: JSON.stringify(newquestion),
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
      setquestion('')
      console.log('new question', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>create New question</h3>

      <label>Question:</label>
      <input 
        type="text" 
        onChange={(e) => setquestion(e.target.value)} 
        value={Question}
      />


      

      <button>Add question</button>
    </form>
  )
}
export default Createquestions