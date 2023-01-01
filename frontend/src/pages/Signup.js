import { useState } from "react"
const Signup = () => {
  const [Username,setUsername] = useState('')
  const [Password,setPassword] = useState('')
  const [Firstname,setfirstname] = useState('')
  const [Lastname,setlastname] = useState('')
  const [Gender,setgender] = useState('')
  const [policy,setpolicy] = useState('')
  const [accept,setaccept] = useState('')

  

  const ttt = async (e) => {
    e.preventDefault()

    const admin = {Username,Password,Firstname,Lastname,Gender}
    //??

    if(accept=='accepted'){
    const response = await fetch('/api/Guest/signup', {
      method: 'POST',
      body: JSON.stringify(admin),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    // if (!response.ok) {
    //   setError(json.error)
    // }
    if (response.ok) {
     // setError(null)
      setUsername('')
      setPassword('')
      setfirstname('')
      setlastname('')
      setgender('')

      console.log('new User added:', json)
    }

  }
else {
    setpolicy("Accept policy first before signing up")
}
}

 const t1 = async (e) => {
    e.preventDefault()
    setpolicy("TEST POLICY")
 }


 const t2 = async (e) => {
  e.preventDefault()
  if(policy=="TEST POLICY")
  setaccept("accepted")
}

  return (
    <form className="create"> 
      <h3>signup</h3>

      <label>Username:</label>
      <input 
        type="text" 
        onChange={(e) => setUsername(e.target.value)} 
        value={Username}
      />

    <label>Password</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={Password}
      />
      <label>first name</label>
      <input 
        type="text" 
        onChange={(e) => setfirstname(e.target.value)} 
        value={Firstname}
      />
      <label>last name</label>
      <input 
        type="text" 
        onChange={(e) => setlastname(e.target.value)} 
        value={Lastname}
      />
      <label>gender</label>
      <input 
        type="text" 
        onChange={(e) => setgender(e.target.value)} 
        value={Gender}
      />
      <p>{policy}</p>
     <button onClick={t1}>View Policy</button>
      <button  onClick={t2}  >Accept Policy</button>
      <p></p>


      <button onClick={ttt}>Sign up</button>
      
    </form>
    
  )
}


  
  export default Signup