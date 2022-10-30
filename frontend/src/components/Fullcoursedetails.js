const Fullcoursedetails = ({ Course }) => {

    return (
      <div className="course-details">
        <h4>Title: {Course.Title}</h4>
        <p>Instructor Name: {Course.InstructorName}</p>
        <p><strong>Total Hours Of The Course: </strong>{Course.TotalHoursOfCourse}</p>
        <p><strong>Course Rating: </strong>{Course.Rating}</p>
        <p><strong>Subtitles: </strong>{Course.Subtitles}</p>
        <p><strong>Subject: </strong>{Course.Subject}</p>
        <p><strong>Summary: </strong>{Course.Summary}</p>
        <p><strong>Exercises: </strong>{Course.Exercises}</p>
        <p><strong>Price: </strong>{Course.Exercises}</p>
        <p><strong>Total Hours of each subtitle: </strong>{Course.TotalHoursOfEachSubtitle}</p>
        <p><strong>--------------------------------------------- </strong></p>
      </div>
    )
  }
  
  export default Fullcoursedetails