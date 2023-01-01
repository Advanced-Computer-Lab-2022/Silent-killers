import axios from "axios";
import { useEffect, useState } from "react"

// components
import InstructorContract from "../components/InstructorContract"

const ViewContract= () => {
  const [Instructor,setInstructor] = useState(null)
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  useEffect(() => {
    const fetchContracts = async () => {
      // const response = await fetch('/api/Instructor/getinstructors')
      const response = await axios.get('http://localhost:8000/api/Instructor/getinsbyid/?id=${id}')
      const json = await response.json()

      if (response.ok) {
        setInstructor(json)
      }
    }

    fetchContracts()
  }, [])

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

export default ViewContract