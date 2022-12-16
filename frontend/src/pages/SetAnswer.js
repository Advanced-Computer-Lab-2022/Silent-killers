import { useState } from "react"
const SetAnswer = () => {
  const [insid,setinsid] = useState('')
  const [answer1,setanswer1] = useState('')
  const [exercisenumber1,setexercise1] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const sol = {insid,answer1,exercisenumber1}
    //??
    const response = await fetch('/api/Instructor/setanswer', {
      method: 'PATCH',
      body: JSON.stringify(sol),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

  
    if (response.ok) {
     setinsid('')
     setanswer1('')
     setexercise1('')
      console.log('correct answer added:', json)
    }

  }

  return (
    <form className="solution" onSubmit={handleSubmit}> 
      <h3>Correct solution</h3>

      <label>ID</label>
      <input 
        type="text" 
        onChange={(e) => setinsid(e.target.value)} 
        value={insid}
      />

    <label>answer</label>
      <input 
        type="text" 
        onChange={(e) => setanswer1(e.target.value)} 
        value={answer1}
      />

    <label>exercise</label>
      <input 
        type="text" 
        onChange={(e) => setexercise1(e.target.value)} 
        value={exercisenumber1}
      />
      

      <button>set answer</button>
    </form>
  )
}


  
  export default SetAnswer