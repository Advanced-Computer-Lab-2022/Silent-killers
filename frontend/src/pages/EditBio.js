import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const Editbio = (props) => {
  let navigation = useNavigate();
  const initialInputValues = {
    id:'',
    bio: '',
    email: '',
  } 
  const [values, setValues] = useState(initialInputValues)

  //show admin info before updating
  const {id} = useParams()
  useEffect(()=>{
   if(id){
       getInstructor(id)
   }
  },[id])
  const getInstructor = async (id) =>{
      const response = await axios.get(`http://localhost:8000/api/Instructor/editbio/${id}`);
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
        await axios.patch(`http://localhost:8000/api/Instructor/editbio/${id}`, {
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
                <label>Biography</label>
                <input name="bio" value={values.bio} onChange={handleInputChange} type="text" />
            </li>
            <li> 
                <label>Email</label>
                <input name="email" value={values.email} onChange={handleInputChange} type="email"  />
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

export default Editbio;