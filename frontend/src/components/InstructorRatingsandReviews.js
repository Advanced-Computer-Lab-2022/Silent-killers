const InstructorRatingsandReviews = ({ Instructor }) => {

    return (
      <div className="RatingsandReviews">
        <h4>{Instructor.Ratings}</h4>
        <p><strong>Ratings: </strong>{Instructor.Ratings}</p>
        <p><strong>Reviews: </strong>{Instructor.Reviews}</p>
        <p><strong>--------------------------------------------- </strong></p>
      </div>
    )
  }
  
  export default InstructorRatingsandReviews