import { useState } from 'react'

const CreateNewCourse = () => {
  const [Title, setTitle] = useState('')
  const [InstructorID, setInstructorID] = useState(null)
  const [TotalHoursOfCourse, setTotalHoursOfCourse] = useState(null)
  const [Subtitles, setSubtitle] = useState('')
  const [Subject, setSubject] = useState('')
  const [Price, setPrice] = useState('')
  const [Summary, setSummary] = useState('')
  const [Exercises, setExercises] = useState(null)
  const [TotalHoursOfEachSubtitle, setTotalHoursOfEachSubtitle] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const course = {Title,InstructorID,TotalHoursOfCourse,Subtitles,Subject,Summary,Exercises,Price,TotalHoursOfEachSubtitle}
    //??
    const response = await fetch('/api/Instructor/addcourses', {
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
      setTitle('')
      setSubtitle('')
      setPrice('')
      setSummary('')
      setInstructorID(null)
      setTotalHoursOfCourse(null)
      setSubject('')
      setExercises(null)
      setTotalHoursOfEachSubtitle(null)
      console.log('new Course added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>create a New Course</h3>

      <label>Course Name:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={Title}
      />

     <label>Instructor ID:</label>
      <input 
        type="number" 
        onChange={(e) => setInstructorID(e.target.value)} 
        value={InstructorID}
      />

     <label> Total Hours Of the Course:</label>
      <input 
        type="number" 
        onChange={(e) => setTotalHoursOfCourse(e.target.value)} 
        value={TotalHoursOfCourse}
      />


    
      <label>Subtitles:</label>
      <input 
        type="text" 
        onChange={(e) => setSubtitle(e.target.value)} 
        value={Subtitles}
      />

    <label>Subject:</label>
      <input 
        type="text" 
        onChange={(e) => setSubject(e.target.value)} 
        value={Subject}
      />

      <label>Price:</label>
      <input 
        type="text" 
        onChange={(e) => setPrice(e.target.value)} 
        value={Price} 
      />
      <label> Total number of Exercises:</label>
      
      <input 
        type="number" 
        onChange={(e) => setExercises(e.target.value)} 
        value={Exercises}
      />

    <label> Total number of hours for each Subtitle:</label>
      
      <input 
        type="number" 
        onChange={(e) => setTotalHoursOfEachSubtitle(e.target.value)} 
        value={TotalHoursOfEachSubtitle}
      />

      <label>Summary about the course:</label>
      <input 
        type="text" 
        onChange={(e) => setSummary(e.target.value)} 
        value={Summary}
      />

      <button>Add Course</button>
    </form>
  )
}

export default CreateNewCourse