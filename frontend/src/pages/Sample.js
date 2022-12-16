import React from 'react';

class Sample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <form className="create">
        <h3>Search Course</h3>
        <label>Course Title</label>
        <input
          type="text"
          onChange={(e) => this.setState({ value: e.target.value })}
          //onfocusout=alert("HIIIII")
          value={this.state.value} ></input>

        <button
          title="Search"
          onClick={(e) => this.handleSubmit()}
        >Search</button>

      </form>
    );
  }

  handleSubmit() {

    console.log("In Hanlde Submit");
    //e.preventDefault()

    var xmlhttp = new XMLHttpRequest();
    //xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("GET", '/api/Instructor/searchby', false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");

    var ItemJSON;

    ItemJSON = '[{"title": ' + this.state.value + '}]';
    ItemJSON = '[{"title" : "Course Subject Test2"}]';
    xmlhttp.send(JSON.stringify(ItemJSON));
    alert(xmlhttp.responseText);

    // const course = {Title,Subject,Instructor}
    // const response =  fetch('/api/Instructor/searchby', {
    //   method: 'GET',
    //   // method: 'POST',
    //   body: JSON.stringify(this.state.value),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })

    // const json =  response.json()
    // alert(json);
    // if (response.ok) {
    //   console.log("VALID RESPONSE!!!!");
    //   //setCourse(json)
    //   // setTitle('')
    //   // setSubject('')
    //   // setInstructor('')
    // }
  }
}



// import React, { useState } from 'react';
// class Example extends React.Component{


// }
// function Sample() {
//   // Declare a new state variable, which we'll call "count"
//   const [Title, setTitle] = useState('');

//   handleSubmit = async (e) => {

//     e.preventDefault()

//     // const course = {Title,Subject,Instructor}
//     const response = await fetch('/api/Instructor/searchby', {
//       method: 'GET',
//       // method: 'POST',
//       body: JSON.stringify(Title),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })

//     const json = await response.json()

//     if (response.ok) {
//       console.log("VALID RESPONSE!!!!");
//       //setCourse(json)
//       // setTitle('')
//       // setSubject('')
//       // setInstructor('')
//     }
//   }
//   return (
//     <form className="create">
//       <h3>Search Course</h3>
//       <label>Course Title</label>
//       <input
//         type="text"
//         onChange={(e) => setTitle(e.target.value)}
//         value={Title}/>
//       <button>Search by Title onCLick={handleSubmit()}</button>
//     </form>
//   );



// }
export default Sample