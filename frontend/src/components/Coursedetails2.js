const Coursedetails2 = ({ Course }) => {

    return (
      <div className="course-details2">
        <h4>{Course.Title}</h4>
        <p><strong>Reviews: </strong>{Course.Reviews}</p>
        <p><strong>Course Rating: </strong>{Course.Rating}</p>
        <p><strong>--------------------------------------------- </strong></p>
      </div>
    )
  }
  
  export default Coursedetails2