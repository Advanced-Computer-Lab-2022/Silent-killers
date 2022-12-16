const Exercisedetails = ({ Exercises }) => {

    return (
      <div className="exercise-details">
        <p><strong>Exercise Number </strong>{Exercises.ExerciseNumber}</p>
        <p><strong>Exercise Grade </strong>{Exercises.Grade}</p>
        <p><strong>--------------------------------------------- </strong></p>
      </div>
    )
  }
  
  export default Exercisedetails