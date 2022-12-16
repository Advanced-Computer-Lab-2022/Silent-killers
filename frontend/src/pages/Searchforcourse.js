import { useState } from "react"
// import Instructor from "../../../models/Course"
//import { searchforcoursebysubjecttitleinstructor } from "../controllers/InstructorController"

// components

// let myVar = (data) => {
  
//   const[Title, setTitle] = useState();

// }
const Searchforcourse= (t) => {
  //const [Title,setTitle] = useState();
  // const [Subject,setSubject] = useState(null)
  // const [Instructor,setInstructor] = useState(null)

  
  const handleSubmit = async (e) => {
    e.preventDefault()

   // const course = {Title,Subject,Instructor}
    const response = await fetch('/api/Instructor/searchby', {
      method : 'GET',
      // method: 'POST',
      body: JSON.stringify("ytuytyut"),
      headers: {
        'Content-Type': 'application/json'
      }
    })

      const json = await response.json()

      if (response.ok) {
        console.log("VALID RESPONSE!!!!");
        //setCourse(json)
        // setTitle('')
        // setSubject('')
        // setInstructor('')
      }
    }

    return (
    //   <div className="home">
    //   <h1>{Title.map(post => (
    //         <div key = {post.id} >
    //           <h1>{post.Title}</h1>
    //           <h1>{post.body}</h1>
    //   </div>
    // ))}</h1>
    //  </div>
    // /div>
        <form className="create" onSubmit={handleSubmit}> 
          <h3>Search Course</h3>
    
          <label>Course Title</label>
        <input 
          type="text" 
          onChange={(e) => Searchforcourse(e.target.value)} 
           value={'vvv'}
        />
<button>Search by Title </button>
{/* <div className="home">
      <h1>{Title.map(post => (
            <div key = {post.id} >
              <h1>{post.Title}</h1>
              <h1>{post.body}</h1>
      </div>
    ))}</h1>
    </div> */}
{/* <label>Course Subject</label>
        <input 
          type="text" 
          onChange={(e) => Searchforcourse(e.target.value)} 
          value={Subject}
        />
        <button>Search by Subject</button> */}
{/* <label>Course Instructor</label>
        <input 
          type="text" 
          onChange={(e) => Searchforcourse(e.target.value)} 
          value={Instructor}
        />
        <button>Search by Instructor</button> */}
    
        </form>
        
        
        
      )

    }

export default Searchforcourse