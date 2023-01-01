import { useEffect, useState } from "react"
import axios from 'axios';


// components


const Addpreviewvid = () => {
  const [link,setlink] = useState(null)
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const handleSubmit = async (e) => {
    e.preventDefault()

    const body = {link}
    //??
    const response=  async () => {
        //get the blogs from the backend
        
            await axios.post(`http://localhost:8000/api/Instructor/addpreviewvid/?PreviewVideo=${link}&id=${id}`).then(
            // (res) => { 
            //     const blogs = res.data
            //     console.log(blogs)
            //     setBlog(blogs)
                
            // }
            );
        

    }
    const json = await response.json()

    // if (!response.ok) {
    //   setError(json.error)
    // }
    if (response.ok) {
     // setError(null)
     setlink('')
     console.log('Link added:', json)
    }

  }
   

  return (
    <div>
    <label>Video Link : </label>
    <input 
      type="text" 
     onChange={(e) => setlink(e.target.value)} 
     value={link}
    />
    <button
    onClick={handleSubmit}
      type = "submit">
      Add link
      
      
    </button>
    </div>
  )
}

export default Addpreviewvid