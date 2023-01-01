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


const SearchForRefund = () => { 
  const [Status,setStatus] = useState(null)
  const [CourseId,setCourseId] = useState(null)
  const [UserId,setUserId] = useState(null)
  const [authors,setAuthors] = useState([]);
    
    const getAuthors =  async () => {
      await axios.post(`http://localhost:8000/api/Admin/SearchforRefund`, {statuss:Status,courseID:CourseId,userID:UserId}).then(
        (res) => { 
            const refund = res.data
            setAuthors(refund);
            console.log(refund[0]);
            console.log(refund[0]._id);
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
            >Search for a Refund Request</Button>
            {/* margin */}
            </Box>
            <label>Status : </label>
      <input type="text" value= {Status} onChange={(e)=>{setStatus(e.target.value)}} Price/> <br /><br />
      <label>Course ID : </label>
      <input type="text" value={CourseId} onChange={(e)=>{setCourseId(e.target.value)}} /> <br /><br />
      <label>User ID : </label>
      <input type="text" value={UserId} onChange={(e)=>{setUserId(e.target.value)}} /> <br /><br />
                    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">CourseID</StyledTableCell>
            <StyledTableCell align="center">UserID</StyledTableCell>
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
            
            onClick={() => window.location.href=`/Adminrefund?id=${author._id}`}
              key={author._id}
              

              >
              <TableCell align="center">{author.Status}</TableCell>
              <TableCell align="center">{author.CourseId}</TableCell>
              <TableCell align="center">{author.UserId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 </div>
                

    )
}
export default SearchForRefund;