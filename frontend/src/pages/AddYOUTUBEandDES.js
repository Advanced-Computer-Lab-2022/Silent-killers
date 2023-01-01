import axios from "axios"
import { useEffect, useState } from "react";
const AddYOUTUBEandDES = ()=>{

//   const params = new URLSearchParams(window.location.search);
//   const userId = params.get('id');
//   console.log(userId);
  
    const[link, setlink] = useState({});
    const[dd, setdd] = useState({});
    const [loading, setLoading] = useState(false);
    const addYOUandDES = async()=>{
        try{
            setLoading(true);
            const res = await axios.patch(`http://localhost:8000/api/Instructor/Adddesc?id=${localStorage.getItem("course")}`,{youTube: link , desc:dd})
            console.log(res.data);
            setlink(res.data);
            setdd(res.data);
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
            <h1>Please Insert Youtube Link</h1>
            <input type="text" value= {link} onChange={(e)=>{setlink(e.target.value)}} /> <br /><br />
            <h2>Write Description</h2>
            <input type="text" value= {dd} onChange={(e)=>{setdd(e.target.value)}} /> <br /><br />
            <button onClick={addYOUandDES } >Submit</button> 
        </div>
        )
}

export default AddYOUTUBEandDES;