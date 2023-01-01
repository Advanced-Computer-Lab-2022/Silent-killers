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

const ViewAllAvRefunds =  () => { 

    // const params = new URLSearchParams(window.location.search);
    // const userId = params.get('id');
    //console.log(userId);

  const [results,setresults] = useState([])
//   const [email,setEmail] = useState(null);
 
      
  
      const setbio =  async () => {
        console.log("i get in here!")
        
           await axios.get(`http://localhost:8000/api/Admin/ViewAllRefunds`).then(
          (res) => { 
            console.log(res.data)
           // console.log(results)
            setresults(res.data);
          }
           );

    }

  return (
    <div className="App">
      <label>All Refund Requests</label>
      <Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={setbio}
            margin="normal"
            padding="normal"
            >View All Refund Requests</Button>
            {/* margin */}
            </Box>
            <TableContainer component={Paper}>

      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">CourseId</StyledTableCell>
            <StyledTableCell align="center">UserId</StyledTableCell>
            <StyledTableCell align="center">PaymentId</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
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
            
            onClick={() => window.location.href=`/AdminRefundingWallets?id=${result._id}`}
              key={result._id}
              

              >
              <TableCell align="center">{result.CourseId}</TableCell>
              <TableCell align="center">{result.UserId}</TableCell>
              <TableCell align="center">{result.PaymentId}</TableCell>
              <TableCell align="center">{result.Status}</TableCell>
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
  export default ViewAllAvRefunds;