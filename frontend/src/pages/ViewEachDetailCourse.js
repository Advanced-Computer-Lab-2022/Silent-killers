import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ViewEachDetailCourse = () => { 

    
  //  const params = new URLSearchParams(window.location.search);
  //  const userId = params.get('id');
  //  console.log(userId);

  const [results,setresults] = useState(null)
//   const [email,setEmail] = useState(null);
 
      
  
      const setbio =  async () => {
        console.log("i get in here!")
        
           await axios.get(`http://localhost:8000/api/CorporateTrainee/ViewCourseDetails?id=${localStorage.getItem("course")}`).then(
          (res) => { 
           // setresults(res.data)
            //setresults(Object.entries(res.data));
            //setresults(entries);  
            //console.log(entries)
            console.log(res.data)
           // console.log(results)
              //console.log(results.Title)
              //console.log(email)
              
          var convertIntoArray = ["Course Title:    ",res.data.Title, "   / Preview Video:    ",res.data.PreviewVideo,
          "    /Instructor Name:    ",res.data.InstructorName , "   / Total Hours Of Course:    ",res.data.TotalHoursOfCourse,
          "    /Rating:    ",res.data.Rating ,"    /Subtitles:    ",res.data.Subtitles , "    /Subtitles Description:    ",
        res.data.SubtitlesDES , "   / Subject:    " , res.data.Subject , "   / Summary:    " , res.data.Summary , 
        "    /Number of days:    ", res.data.NoOfDays , "   / Reviews:  " , res.data.Reviews , "   / Price:  " ,
        res.data.Price , "   / Discount:  " , res.data.Discount , "-----------------------------------------------------------"
      ];
          // for (var i = 0; i < res.data.length; i++) {
          //   convertIntoArray.push("Course Title:    ")
          //   //  convertIntoArray.push(res.data[i].Title);
          //   //  convertIntoArray.push("    Preview Video:    ")
          //   //  convertIntoArray.push(res.data[i].PreviewVideo);
          //   //  convertIntoArray.push("    Instructor Name:    ")
          //   //  convertIntoArray.push(res.data[i].InstructorName);
          //   //  convertIntoArray.push("    Total Hours Of Course:    ")
          //   //  convertIntoArray.push(res.data[i].TotalHoursOfCourse);
          //   //  convertIntoArray.push("    Rating:    ")
          //   //  convertIntoArray.push(res.data[i].Rating);
          //   //  convertIntoArray.push("    Subtitles:    ")
          //   //  convertIntoArray.push(res.data[i].Subtitles);
          //   //  convertIntoArray.push("    Subtitles Description:    ")
          //   //  convertIntoArray.push(res.data[i].SubtitlesDES);
          //   //  convertIntoArray.push("    Subject:    ")
          //   //  convertIntoArray.push(res.data[i].Subject);

          //   //  convertIntoArray.push("    Summary:    ")
          //   //  convertIntoArray.push(res.data[i].Summary);
          //   //  convertIntoArray.push("    Video Link:    ")
          //   //  convertIntoArray.push(res.data[i].VideoLink);
          //   //  convertIntoArray.push("    Number of days:    ")
          //   //  convertIntoArray.push(res.data[i].NoOfDays);
          //   //  convertIntoArray.push("    Reviews:  ")
          //   //  convertIntoArray.push(res.data[i].Reviews);
          //   //  convertIntoArray.push("    Price:  ")
          //   //  convertIntoArray.push(res.data[i].Price);
          //   //  convertIntoArray.push("    Discount:  ")
          //   //  convertIntoArray.push(res.data[i].Discount);
          //   //  convertIntoArray.push("-----------------------------------------------------------")
          // }

          console.log(convertIntoArray);
          setresults(convertIntoArray)
          }
           );

    }

  return (
    <div className="App">
      
      <table border="1" style={{ float: 'left' }}>
      </table>
      <div>
      <label>Course Details: </label>
      {/* <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br /> */}
        
        <button onClick={setbio} >Details</button>  
        <p> {results}</p>
      </div>
    </div>
  );
}
  export default ViewEachDetailCourse;