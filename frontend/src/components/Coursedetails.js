const Coursedetails = ({ Course }) => {

    return (
      <div className="course-details">
        <h4>{Course.Title}</h4>
        <p><strong>Total Hours Of The Course: </strong>{Course.TotalHoursOfCourse}</p>
        <p><strong>Course Rating: </strong>{Course.Rating}</p>
      </div>
    )
  }
  
  export default Coursedetails