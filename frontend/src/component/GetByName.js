import React, { useState } from "react";
import axios from "axios";
import { MenuBar } from "./MenuBar";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
  
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export function GetByName() {
    const url = "http://localhost:8080/groceries/";
    const [results, setResults] = useState();
    const [isLoading, setLoading]= useState(true);

    const [errorHandle, setErrorHandle] = useState(false);

    const [name, setName] = useState('');

    async function GetByName(e) {
        e.preventDefault();
        if (checkError(name) === true) {
            setLoading(true)
            const result = await axios.get(url + 'getByName?name=' +name);
            setErrorHandle(false);
            setResults(result.data);
            setLoading(false);
        }
    }
    function checkError(name) {
        if (name.length === 0) {
            setErrorHandle(true);
            return false;
        } else {
            setErrorHandle(false);
            return true;
        }
    }

    return (
        <div>
            <MenuBar/>
            <div align="center">
                <form onSubmit={GetByName}>
                    <br/>
                    <h2><u>Enter the name of the item you would like to find:</u></h2><br/><br/>
                    <TextField id="filled-hidden-label-small" error={errorHandle} variant="filled" size="small" label="Name" onChange={e => {setName(e.target.value); checkError()}}/> <br/><br/>
                    <input type="submit" value="Search"/>
                </form>
            </div>

            {isLoading ? '' : 
            <TableContainer component={Paper}  align='center' style={{paddingLeft: 120, width:'auto'}}>
                <Table aria-label="Results">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">Quantity</StyledTableCell>
                            <StyledTableCell align="right">Category</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow key={results.id}>
                            <StyledTableCell component="th" scope="row">
                                {results.id}
                            </StyledTableCell>
                            <StyledTableCell align="right">{results.name}</StyledTableCell>
                            <StyledTableCell align="right">{results.quantity}</StyledTableCell>
                            <StyledTableCell align="right">{results.category}</StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            }
        </div>
    )
}