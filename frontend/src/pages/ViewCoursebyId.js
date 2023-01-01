import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ViewCoursebyId = () => { 

    
   const params = new URLSearchParams(window.location.search);
   const id = params.get('id');
   console.log(id);

  //const [Price,setPrice] = useState(null);
  const [results,setresults] = useState(null)
//   const [email,setEmail] = useState(null);
 
      
    localStorage.setItem("course" , id);
    console.log(localStorage.getItem("course"));
      const setbio =  async () => {
        console.log("i get in here!")
        //console.log(Price)
        
           await axios.post(`http://localhost:8000/api/Course/viewcoursebyid?id=${localStorage.getItem("course")}`).then(
          (res) => { 
           // setresults(res.data)
            //setresults(Object.entries(res.data));
            //setresults(entries);  
            //console.log(entries)
            console.log(res.data)
           // console.log(results)
              //console.log(results.Title)
              //console.log(email)
              
              var convertIntoArray = [];
            convertIntoArray.push("Course Title:             ")
            convertIntoArray.push(res.data.Title);
            convertIntoArray.push("    Preview Video:    ")
            convertIntoArray.push(res.data.PreviewVideo);
            convertIntoArray.push("    Instructor Name:    ")
            convertIntoArray.push(res.data.InstructorName);
            convertIntoArray.push("    Total Hours Of Course:    ")
            convertIntoArray.push(res.data.TotalHoursOfCourse);
            convertIntoArray.push("    Rating:    ")
            convertIntoArray.push(res.data.Rating);
            convertIntoArray.push("    Subtitles:    ")
            convertIntoArray.push(res.data.Subtitles);
            convertIntoArray.push("    Subtitles Description:    ")
            convertIntoArray.push(res.data.SubtitlesDES);
            convertIntoArray.push("    Subject:    ")
            convertIntoArray.push(res.data.Subject);
            convertIntoArray.push("    Summary:    ")
            convertIntoArray.push(res.data.Summary);
            convertIntoArray.push("    Video Link:    ")
            convertIntoArray.push(res.data.VideoLink);
            convertIntoArray.push("    Number of days:    ")
            convertIntoArray.push(res.data.NoOfDays);
            convertIntoArray.push("    Reviews:  ")
            convertIntoArray.push(res.data.Reviews);
            convertIntoArray.push("    Price:  ")
            convertIntoArray.push(res.data.Price);
            convertIntoArray.push("    Discount:  ")
            convertIntoArray.push(res.data.Discount);
            convertIntoArray.push("-----------------------------------------------------------")
         
          console.log(convertIntoArray);
          setresults(convertIntoArray);
          console.log(results);
          }
           );

    }

  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      {/* <label>Price: </label>
      <input type="text" value= {Price} onChange={(e)=>{setPrice(e.target.value)}} Price/> <br /><br /> */}
      {/* <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br /> */}
        
        <button onClick={setbio} >View Course Details</button>  
        <p> {results}</p>
      </div>
    </div>
  );
}
  export default ViewCoursebyId;