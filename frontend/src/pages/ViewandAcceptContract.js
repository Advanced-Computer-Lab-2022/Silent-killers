import { useEffect, useState } from "react"
import axios from 'axios';


// components
import InstructorContract from "../components/InstructorContract"

const ViewandAcceptContract = () => {
  const [Instructor,setInstructor] = useState(null)
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
    const fetchCourses=  async () => {
        //get the blogs from the backend
        
            await axios.post(`http://localhost:8000/api/Instructor/AcceptContract?userId=${id}`).then(
            (res) => { 
                const Instructor = res.data
                console.log(Instructor)
                setInstructor(Instructor)
                
            }
            );
        

    }

    fetchCourses()
   

  return (
    <div className="home">
      <div className="Courses">
        {Instructor && Instructor.map(Instructor => (
          <InstructorContract Instructor={Instructor} key={Instructor._id} />
        ))}
      </div>
    </div>
  )
}

export default ViewandAcceptContract