import React, { useEffect, useState } from 'react'




const Createquestions = () => { 
  
  
  const [ExerciseNumber,setExerciseno] = useState([]);
  const [TraineeUsername,setTraineeUsername] = useState([]);
  const [Questions,setQuestions] = useState([]);
  const [CorrectSolutions,setCorrectSolutions] = useState([]);
  const [CourseTitle,setCourseTitle] = useState([]);
  const [TraineeSolutions,setTraineeSolutions] = useState([]);

 
      
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const course = {ExerciseNumber,TraineeUsername,Questions,CorrectSolutions,CourseTitle,TraineeSolutions}
    //??
    const response = await fetch('/api/Instructor/addquestion', {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    // if (!response.ok) {
    //   setError(json.error)
    // }
    if (response.ok) {
    //   setError(null)
      setExerciseno('')
      setTraineeUsername('')
      setQuestions('')
      setCorrectSolutions('')
      setCourseTitle('')
      setTraineeSolutions('')
      console.log('new Course added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>add exercise</h3>

      <label>exercise number</label>
      <input 
        type="number" 
        onChange={(e) => setExerciseno(e.target.value)} 
        value={ExerciseNumber}
      />

     <label>Trainee Username</label>
      <input 
        type="text" 
        onChange={(e) => setTraineeUsername(e.target.value)} 
        value={TraineeUsername}
      />

     <label> Questions</label>
     <label> Questions</label>
      <input 
        type="text" 
        onChange={(e) => setQuestions(e.target.value)} 
        value={Questions}
 
      />


    
      <label>Correct Solutions</label>
      <input 
        type="text" 
        onChange={(e) => setCorrectSolutions(e.target.value)} 
        value={CorrectSolutions}
      />

    <label>Course Title</label>
      <input 
        type="text" 
        onChange={(e) => setCourseTitle(e.target.value)} 
        value={CourseTitle}
      />

      <label>Trainee Solutions:</label>
      <input 
        type="text" 
        onChange={(e) => setTraineeSolutions(e.target.value)} 
        value={TraineeSolutions} 
      />
      

      <button>Add exercise</button>
    </form>
  )
}

export default Createquestions