import axios from "axios"
import { useEffect, useState } from "react";
const CourseRatingIND = ()=>{

    const params = new URLSearchParams(window.location.search);
  const userId = params.get('id');
  console.log(userId);
  
    const[rating, setrating] = useState({});
    const [loading, setLoading] = useState(false);
    const rateCourse = async()=>{
        try{
            setLoading(true);
            const res = await axios.patch(`http://localhost:8000/api/IndividualTrainee/courseRating?id=${userId}`,{rating: rating})
            console.log(res.data);
            setrating(res.data);
            setLoading(false)
        }catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    //  useEffect(()=>{
    //      rateCourse('63583c7b96f0aefb129976e6',rating);// change id to a real course ID
    //  },[rating])

    if(loading)
        return <div>loading...</div>
    return(
    
        <div>
            <h1>Please Rate the current course</h1>
            <h2>Insert an Integer value between 0 & 5</h2>
            <input type="number" value= {rating} onChange={(e)=>{setrating(e.target.value)}} /> <br /><br />
            <button onClick={rateCourse} >Set Rating</button>  
        </div>
        )
}

export default CourseRatingIND;