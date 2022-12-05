import { useEffect, useState } from "react"
import Instructordetails from "../components/Instructordetails"
const Getinstructors = () => {
    const [Instructor,setInstructor] = useState(null)
  
    useEffect(() => {
      const fetchCourses = async () => {
        const response = await fetch('/api/Instructor/getinstructor')
        const json = await response.json()
  
        if (response.ok) {
          setInstructor(json)
        }
      }
  
      fetchCourses()
    }, [])
  
    return (
      <div className="home">
        <div className="Instructors">
          {Instructor && Instructor.map(Instructor => (
            <Instructordetails Instructor={Instructor} key={Instructor._id} />
          ))}
        </div>
      </div>
    )
  }
// const Getinstructors = () => {
//   const [Instructor,setInstructor] = useState(null)

//   useEffect(() => {
//     const fetchInstructors = async () => {
//       const response = await fetch('/api/Instructor/getinstructor')
//       const json = await response.json()

//       if (response.ok) {
//         setInstructor(json)
//       }
//     }

//     fetchInstructors()
//   }, [])

//   return (
//     <div className="home">
//       <div className="instructors">
//         {Instructor && Instructor.map(Instructor => (
//           <Instructordetails Instructor={Instructor} key={Instructor._id} />
//         ))}
//       </div>
//     </div>
//   )
// }

export default Getinstructors