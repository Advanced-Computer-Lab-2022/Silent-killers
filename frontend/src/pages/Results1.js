import { useEffect, useState } from "react"

// components
import Exercisedetails from "../components/Exercisedetails"

const Results1 = () => {
  const [Exercises,setExercises] = useState(null)

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch('/api/CorporateTrainee/viewgrade')
      const json = await response.json()

      if (response.ok) {
        setExercises(json)
      }
    }

    fetchExercises()
  }, [])

  return (
    <div className="home">
      <div className="Exercises">
        {Exercises && Exercises.map(Exercises => (
          <Exercisedetails Exercises={Exercises} key={Exercises._id} />
        ))}
      </div>
    </div>
  )
}

export default Results1