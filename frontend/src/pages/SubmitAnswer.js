import { useState } from "react"
const SubmitAnswer = () => {
  const [trainee,settrainee] = useState('')
  const [answer,setasnwer] = useState('')
  const [exercisenumber,setexercise] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const sol = {trainee,answer,exercisenumber}
    //??
    const response = await fetch('/api/IndividualTrainee/submitanswer', {
      method: 'PATCH',
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
     settrainee('')
     setasnwer('')
     setexercise('')
     console.log('answer submitted:', json)
    }

  }

  return (
    <form className="Answer" onSubmit={handleSubmit}> 
      <h3>Trainee solution</h3>

      <label>TraineeUsername</label>
      <input 
        type="text" 
        onChange={(e) => settrainee(e.target.value)} 
        value={trainee}
      />

    <label>answer</label>
      <input 
        type="text" 
        onChange={(e) => setasnwer(e.target.value)} 
        value={answer}
      />

    <label>exercise</label>
      <input 
        type="text" 
        onChange={(e) => setexercise(e.target.value)} 
        value={exercisenumber}
      />
      

      <button>submit answer</button>
    </form>
  )
}


  
  export default SubmitAnswer