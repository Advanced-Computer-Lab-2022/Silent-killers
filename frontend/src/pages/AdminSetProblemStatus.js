import axios from "axios"
import { useEffect, useState } from "react";
const AdminSetProblemStatus = ()=>{

  const params = new URLSearchParams(window.location.search);
  const id1 = params.get('id');
  console.log(id1);
  
    const[prom, setprom] = useState({});
    const [loading, setLoading] = useState(false);
    const Courseprom = async()=>{
        try{
            setLoading(true);
            const res = await axios.patch(`http://localhost:8000/api/Admin/MarkReported?id=${id1}`,{solution: prom})
            console.log(res.data);
            setprom(res.data);
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
            <h1>Please insert the Report Status</h1>
            <h2>Either 'Pending' OR 'Resolved'</h2>
            <input type="text" value= {prom} onChange={(e)=>{setprom(e.target.value)}} /> <br /><br />
            <button onClick={Courseprom} >Set Status</button>  
        </div>
        )
}

export default AdminSetProblemStatus;