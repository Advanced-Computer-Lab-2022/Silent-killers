import React, { useEffect, useState } from 'react'
import axios from 'axios';
const CreateNewCourse = () => {
  const [Title, setTitle] = useState('')
  const [TotalHoursOfCourse, setTotalHoursOfCourse] = useState(null)
  const [Subtitles, setSubtitles] = useState('')
  const [Subject, setSubject] = useState('')
  const [Price, setPrice] = useState('')
  const [Summary, setSummary] = useState('')
  //const [Exercises, setExercises] = useState(null)
  const [TotalHoursOfEachSubtitle, setTotalHoursOfEachSubtitle] = useState(null)

        const tt =  async () => {
          console.log(localStorage.getItem("user"))
             await axios.post(`http://localhost:8000/api/Instructor/addcourses?id=${localStorage.getItem("user")}`,{Title:Title,TotalHoursOfCourse:TotalHoursOfCourse,Subtitles:Subtitles,Subject:Subject,Summary:Summary,Price:Price,TotalHoursOfEachSubtitle:TotalHoursOfEachSubtitle}).then(
            (res) => { 
              console.log(res.data)
                
            }
             );}
  
  return (
    <form > 
      <h3>create a New Course</h3>

      <label>Course Name:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={Title}
      />

     {/* <label>Instructor ID:</label>
      <input 
        type="number" 
        onChange={(e) => setInstructorID(e.target.value)} 
        value={InstructorID}
      /> */}

     <label> Total Hours Of the Course:</label>
      <input 
        type="number" 
        onChange={(e) => setTotalHoursOfCourse(e.target.value)} 
        value={TotalHoursOfCourse}
      />


    
      <label>Subtitles:</label>
      <input 
        type="text" 
        onChange={(e) => setSubtitles(e.target.value)} 
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
      {/* <label> Total number of Exercises:</label>
      
      <input 
        type="number" 
        onChange={(e) => setExercises(e.target.value)} 
        value={Exercises}
      /> */}

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

      <button onClick={tt}>Add Course</button>
    </form>
  )
}

export default CreateNewCourse