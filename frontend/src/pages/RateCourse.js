import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
//import { getCourses } from './../../controllers/CourseController';
const RateCourse = (props) => {
  let navigation = useNavigate();
  const initialInputValues = {
    id:'',
    rate: 0,
  } 
  const [values, setValues] = useState(initialInputValues)

  //show admin info before updating
  const {id} = useParams()
  useEffect(()=>{
   if(id){
       getCourses(id)
   }
  },[id])
  const getCourses = async (id) =>{
      const response = await axios.get(`http://localhost:8000/api/Course/ratecourse/${id}`);
      console.log("response", response)
      if (response.status === 200){
          setValues(response.data);
      }
  };

    const handleInputChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      setValues({
        ...values,
        [name]: value,
      })
    }   

    const updateAdmin = async (e, id) =>{
      e.preventDefault();
        await axios.patch(`http://localhost:8000/api/Course/ratecourse/${id}`, {
        ...values
        }
        ).then((res) =>{    
          console.log(res)
            if (res.data.message === 'UPDATED') {
              setValues(res.data.data)
                alert("admin updated")
                }
          })   
  };
  return (
          <form method='Patch'>
           <ul>
           <li>
                <label>id</label>
                <input name="id" value={values.id} onChange={handleInputChange} type="text" />
            </li>
            <li>
                <label>Rate(min:0 & max:5)</label>
                <input name="rate" value={values.rate} onChange={handleInputChange} type="text" />
            </li>
            
            <li>
                 
                <button className='submit-button' onClick={updateAdmin} type="submit" > 
                  Update
                </button> 
                
            </li>
           </ul>
          </form>
        

      
    
  );
}

export default RateCourse;