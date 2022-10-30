import { useState } from 'react'

const CreateNewCourse = () => {
  const [title, setTitle] = useState('')
  const [instructorID, setInstructorID] = useState(null)
  const [totalHoursOfCourse, setTotalHoursOfCourse] = useState(null)
  const [subtitle, setSubtitle] = useState('')
  const [subject, setSubject] = useState('')
  const [price, setPrice] = useState('')
  const [summary, setSummary] = useState('')
  const [exercises, setExercises] = useState(null)
  const [totalHoursOfEachSubtitle, settotalHoursOfEachSubtitle] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const course = {title,instructorID,totalHoursOfCourse,subtitle,subject,summary,exercises,price,totalHoursOfEachSubtitle}
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
      settotalHoursOfEachSubtitle(null)
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
        value={title}
      />

     <label>Instructor ID:</label>
      <input 
        type="number" 
        onChange={(e) => setInstructorID(e.target.value)} 
        value={instructorID}
      />

     <label> Total Hours Of the Course:</label>
      <input 
        type="number" 
        onChange={(e) => setTotalHoursOfCourse(e.target.value)} 
        value={totalHoursOfCourse}
      />


    
      <label>Subtitles:</label>
      <input 
        type="text" 
        onChange={(e) => setSubtitle(e.target.value)} 
        value={subtitle}
      />

    <label>Subject:</label>
      <input 
        type="text" 
        onChange={(e) => setSubject(e.target.value)} 
        value={subject}
      />

      <label>Price:</label>
      <input 
        type="text" 
        onChange={(e) => setPrice(e.target.value)} 
        value={price} 
      />
      <label> Total number of Exercises:</label>
      
      <input 
        type="number" 
        onChange={(e) => setExercises(e.target.value)} 
        value={exercises}
      />

    <label> Total number of hours for each Subtitle:</label>
      
      <input 
        type="number" 
        onChange={(e) => settotalHoursOfEachSubtitle(e.target.value)} 
        value={totalHoursOfEachSubtitle}
      />

      <label>Summary about the course:</label>
      <input 
        type="text" 
        onChange={(e) => setSummary(e.target.value)} 
        value={summary}
      />

      <button>Add Course</button>
    </form>
  )
}

export default CreateNewCourse