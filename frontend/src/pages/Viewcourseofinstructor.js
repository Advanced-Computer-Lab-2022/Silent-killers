import { useEffect, useState } from "react"

// components
import Instructorcourse from "../components/Instructorcourse"

const Viewcourseofinstructor = () => {
  const [Course,setCourse] = useState(null)

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/Instructor/viewbytitle')
      const json = await response.json()

      if (response.ok) {
        setCourse(json)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className="home">
      <div className="Courses">
        {Course && Course.map(Course => (
          <Instructorcourse Course={Course} key={Course._id} />
        ))}
      </div>
    </div>
  )
}

export default Viewcourseofinstructor;