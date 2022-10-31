import { useEffect, useState } from "react"

// components
import Priceofcourse from "../components/Priceofcourse"

const ViewPriceOfCourse = () => {
  const [Course,setCourse] = useState(null)

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/Course/getcourseprice')
      const json = await response.json()

      if (response.ok) {
        setCourse(json)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className="home">
      <div className="Courseprices">
        {Course && Course.map(Course => (
          <Priceofcourse Course={Course} key={Course._id} />
        ))}
      </div>
    </div>
  )
}

export default ViewPriceOfCourse