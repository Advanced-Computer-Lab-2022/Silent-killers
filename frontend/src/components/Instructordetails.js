const Instructordetails = ({ Instructor }) => {

    return (
      <div className="instructor-details">
        <h4>{Instructor.Username}</h4>
        <p><strong>Country </strong>{Instructor.Country}</p>
        <p><strong>password </strong>{Instructor.Password}</p>
        <p><strong>--------------------------------------------- </strong></p>
      </div>
    )
  }
  export default Instructordetails