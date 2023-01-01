import React, {useState,useEffect} from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-hot-toast';
const UserLogin = ()=>{
  const [Username,setUsername]=useState("");
  const [Password,setPassword]=useState("");
  const [user,setUser]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      // navigate.push("/add")
    }
  },[])


  const login = async() => {


    try {
      await axios.post("http://localhost:8000/api/Guest/login",{Username : Username , Password : Password}).then(
            (res) => {    
              console.log(res.data);
              const u = res.data      
            console.log(u)  
            setUser(u)
            localStorage.setItem("user" , u._id);
            localStorage.setItem("Type", u.Type);
            console.log(localStorage.getItem("Type"));
            if(u.Type == 0){
              navigate('/Admin');
            }
            if(u.Type == 1){
              navigate('/Instructor')
            }
            if(u.Type == 2){
              navigate('/CorporateTrainee')
            }
            if(u.Type == 3){
              navigate('/IndividualTrainee')
            }
           // navigate(`/api/Instructor/AcceptContract/?id=${localStorage.getItem("user")}`);

          });
    
      


      
 
 
      setUsername('');
      setPassword('');
  
  } catch (err) {
    // res.send("nope")
      
  }
    // console.warn(Username,Password)
    // //const item={Username,Password};
  
    // const result=await fetch("api/Guest/login",{
    //   method:'POST',
    //   headers:{
    //     "Content-Type":"application/json",
    //     "Accept":'application/json'
    //   },
    //   body:JSON.stringify(item)
     
    // }).then(r=>{
    //   if(r.status==400){
    //     toast.error("wrong",{duration:5000})
    //   }
    //   else if(r.status==200){
    //     toast.success("successful")
    //     navigate(`/api/Instructor/AcceptContract/?id=${id}`);

    //   }
    
    // })    
    // // result=await result.json()
    // localStorage.setItem("user-info",JSON.stringify(result))
    // // navigate.push("/add")
   
  }

return(
  <div>
    <h1>login page</h1>
    <div className="col-sm-6 offset-sm-3">
    <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)} className="form-control"/>
    <br/>
    <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
    <br/>
    <button onClick={(login)} className="btn btn-primary">Login</button>
    <button onClick ={() => window.location.href=`/sendmail`}>Forgot your password? </button> 
    </div></div>
)}
export default UserLogin