import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
const { useState } = require("react");


const Report1IT = () => { 
//   const [Title,setTitle] = useState(null)
//   const [Subject,setSubject] = useState(null)
//   const [Instructor,setInstructor] = useState(null)
//const [results,setresults] = useState(null)
console.log(localStorage.getItem("user"));
  const [authors,setAuthors] = useState([]);
    
    const getAuthors =  async () => {
      await axios.get(`http://localhost:8000/api/Admin/getAccessReq`).then(
        (res) => { 
            const course = res.data
            setAuthors(course);
            console.log(course[0]);
            console.log(course[0]._id);
            //localStorage.setItem("course" , course[0]._id);
            //console.log(localStorage.getItem("course"));
            
        }
         );
       


    }
    return(

        // visualize authors in a table map over authors
        
        <div className="UsersList">
            <Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={getAuthors}
            margin="normal"
            padding="normal"
            >View Access Requests</Button>
            {/* margin */}
            </Box>
            {/* <label>Title : </label> */}
      {/* <input type="text" value= {Title} onChange={(e)=>{setTitle(e.target.value)}} Price/> <br /><br />
      <label>Subject : </label>
      <input type="text" value={Subject} onChange={(e)=>{setSubject(e.target.value)}} /> <br /><br />
      <label>Instructor : </label>
      <input type="text" value={Instructor} onChange={(e)=>{setInstructor(e.target.value)}} /> <br /><br /> */}
        
        
            
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Course ID</StyledTableCell>
            <StyledTableCell align="center">Trainee Id</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Grant Access</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {authors.map((author) => (
            <TableRow
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                width: "100%"
                }
            }}
            
            onClick={() => window.location.href=`/AdminGrantAccess/?CourseId=${author.CourseID}&StudentId=${author.TraineeID}`}
              key={author._id}
              

              >
              <TableCell align="center">{author.CourseID}</TableCell>
              <TableCell align="center">{author.TraineeID}</TableCell>
              <TableCell align="center">{author.Status}</TableCell>
              <TableCell align="center"><Link to="/Admingrantaccess?CourseId=">Grant access </Link></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            {/* <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                {authors.map((author) => (
                    
                    <Link to={`/filter?userId=${author._id}`}>
                    <tr>
                    
                        <td>{author.name} </td>
                        <td>{author.email}</td>

                    </tr>
                    </Link>
                ))}
               
            </table> */}
        </div>
                

    )
}
export default Report1IT;