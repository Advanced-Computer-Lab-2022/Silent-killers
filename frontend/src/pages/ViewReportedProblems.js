import React, { useEffect, useState } from 'react'
import axios from 'axios';
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

const ViewReportedProblems =  () => { 

    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id');
    //console.log(userId);

  const [results,setresults] = useState([])
//   const [email,setEmail] = useState(null);
 
      
  
      const setbio =  async () => {
        console.log("i get in here!")
        
           await axios.get(`http://localhost:8000/api/Admin/ViewReportedProblems`).then(
          (res) => { 
            console.log(res.data)
           // console.log(results)
            setresults(res.data);
          // var convertIntoArray = [];
          // for (var i = 0; i < res.data.length; i++) {
          //    convertIntoArray.push("Course:    ")
          //    convertIntoArray.push(res.data[i].Course);
          //    convertIntoArray.push("   Problem:    ")
          //    convertIntoArray.push(res.data[i].Problem);
          //    convertIntoArray.push("    Status:    ")
          //    convertIntoArray.push(res.data[i].Status);
          //    convertIntoArray.push("    Instructor ID:    ")
          //    convertIntoArray.push(res.data[i].INSid);
          //    convertIntoArray.push("   Corporate Trainee ID:    ")
          //    convertIntoArray.push(res.data[i].CTid);
          //    convertIntoArray.push("   Individual Trainee ID:    ")
          //    convertIntoArray.push(res.data[i].ITid);
          //    convertIntoArray.push("   Comment:    ")
          //    convertIntoArray.push(res.data[i].Comment);
          //    convertIntoArray.push("   View:    ")
          //    convertIntoArray.push(res.data[i].View);
          //    convertIntoArray.push("-----------------------------------------------------------")
          // }
        //   console.log(convertIntoArray);
        //   setresults(convertIntoArray)
          }
           );

    }

  return (
    <div className="App">
      <label>All Reported Problems</label>
      <Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={setbio}
            margin="normal"
            padding="normal"
            >View All Reported Problems</Button>
            {/* margin */}
            </Box>
            <TableContainer component={Paper}>

      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Course</StyledTableCell>
            <StyledTableCell align="center">Problem</StyledTableCell>
            <StyledTableCell align="center">View</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Comment</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result) => (
            <TableRow
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                width: "100%"
                }
            }}
            
            onClick={() => window.location.href=`/AdminSetProblemStatus?id=${result._id}`}
              key={result._id}
              

              >
              <TableCell align="center">{result.Course}</TableCell>
              <TableCell align="center">{result.Problem}</TableCell>
              <TableCell align="center">{result.View}</TableCell>
              <TableCell align="center">{result.Status}</TableCell>
              <TableCell align="center">{result.Comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      {/* <div>
          <p> {results}</p>
      </div> */}
    </div>
  );
}
  export default ViewReportedProblems;