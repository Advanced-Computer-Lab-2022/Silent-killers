import axios from "axios"
import { useEffect, useState } from "react";
const AdminAddPromotion = ()=>{

//   const params = new URLSearchParams(window.location.search);
//   const id1 = params.get('id');
//   console.log(id1);
  
    const[prom, setprom] = useState({});
    const [loading, setLoading] = useState(false);
    const Courseprom = async()=>{
        try{
            setLoading(true);
            const res = await axios.patch(`http://localhost:8000/api/Admin/setPromotion?_id=${localStorage.getItem("course")}`,{percent: prom})
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
            <h1>Please insert the Promotion percentage</h1>
            <h2>Insert an Integer value between 1 & 100</h2>
            <input type="number" value= {prom} onChange={(e)=>{setprom(e.target.value)}} /> <br /><br />
            <button onClick={Courseprom} >Set Promotion</button>  
        </div>
        )
}

export default AdminAddPromotion;