import { useEffect, useState } from "react"

// components
import Coursedetails from "../components/Fullcoursedetails"

const Filteronprice = () => {
  const [Course,setCourse] = useState(null)

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/Guest/filterprice')
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
          <Coursedetails Course={Course} key={Course._id} />
        ))}
      </div>
    </div>
  )
}

export default Filteronprice