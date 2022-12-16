import { useState } from 'react'

const CreateNewCourse = () => {
  const [name, setname] = useState('')
  const [password, setpassword] = useState(null)
  const [firstname, setfirstname] = useState(null)
  const [lastname, setlastname] = useState('')
  const [gender ,setgender] = useState('')
  const [type, settype] = useState('')
 

  const handleSubmit = async (e) => {
    e.preventDefault()

    const course = {name,password,firstname,lastname,gender,type}
    //??
    const response = await fetch('/api/Guest/signup', {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    // if (!response.ok) {
    //   setError(json.error)
    // }
    if (response.ok) {
    //   setError(null)
      setname('')
      setpassword('')
      setfirstname('')
      setlastname('')
      setgender(null)
      settype(null)
      console.log('new Course added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>signup</h3>

      <label>name</label>
      <input 
        type="text" 
        onChange={(e) => setname(e.target.value)} 
        value={name}
      />

     <label>password</label>
      <input 
        type="password" 
        onChange={(e) => setpassword(e.target.value)} 
        value={password}
      />

     <label> first name:</label>
      <input 
        type="text" 
        onChange={(e) => setfirstname(e.target.value)} 
        value={firstname}
      />


    
      <label>last name:</label>
      <input 
        type="text" 
        onChange={(e) => setlastname(e.target.value)} 
        value={lastname}
      />

    <label>gender</label>
      <input 
        type="text" 
        onChange={(e) => setgender(e.target.value)} 
        value={gender}
      />


     

      <button>sign up</button>
    </form>
  )
}

export default CreateNewCourse