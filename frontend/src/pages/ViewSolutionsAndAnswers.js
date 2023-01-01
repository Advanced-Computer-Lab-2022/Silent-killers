import { useState } from "react"
const ViewSolutionsAndAnswers = () => {
  const [Username,setUsername] = useState('')
  const [Exerciseno,setExerciseno] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const sol = {Username,Exerciseno}
    //??
    //38 ?
    const response = await fetch('/api/IndividualTrainee/viewanswers', {
      method: 'POST',
      body: JSON.stringify(sol),
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
      setExerciseno('')
      console.log('Answers and solutions:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>View Solutions</h3>

      <label>Username:</label>
      <input 
        type="text" 
        onChange={(e) => setUsername(e.target.value)} 
        value={Username}
      />

    <label>Exercise Number:</label>
      <input 
        type="text" 
        onChange={(e) => setExerciseno(e.target.value)} 
        value={Exerciseno}
      />

      

      <button onClick={handleSubmit}>Proceed</button>
    </form>
  )
}


  
  export default ViewSolutionsAndAnswers