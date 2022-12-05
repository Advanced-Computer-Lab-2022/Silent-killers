import { useEffect, useState } from "react"
import axios from 'axios';


// components
import InstructorContract from "../components/InstructorContract"

const ViewandAcceptContract = () => {
  const [Course,setCourse] = useState(null)
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
    const fetchCourses=  async () => {
        //get the blogs from the backend
        
            await axios.post(`http://localhost:8000/api/Instructor/addpreviewvid?userId=${id}`).then(
            (res) => { 
                const Course = res.data
                console.log(Course)
                setCourse(Course)
                
            }
            );
        

    }

    fetchCourses()
   

  return (
    <div className="home">
      <div className="Courses">
        {Course && Course.map(Course => (
          <InstructorContract Course={Course} key={Course._id} />
        ))}
      </div>
    </div>
  )
}

export default ViewandAcceptContract