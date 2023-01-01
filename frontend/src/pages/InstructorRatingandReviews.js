import { useEffect, useState } from "react"

// components
import InstructorRatingsandReviews from "../components/InstructorRatingsandReviews"

const InstructorRatingandReviews = () => {
  const [Instructor,setInstructor] = useState(null)
  const params = new URLSearchParams(window.location.search);
const id = params.get('id');

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/Instructor/getinsbyid/?id=${id}')
      const json = await response.json()

      if (response.ok) {
        setInstructor(json)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className="home">
      <div className="Courses">
        {Instructor && Instructor.map(Instructor => (
          <InstructorRatingsandReviews Instructor={Instructor} key={Instructor._id} />
        ))}
      </div>
    </div>
  )
}

export default InstructorRatingandReviews