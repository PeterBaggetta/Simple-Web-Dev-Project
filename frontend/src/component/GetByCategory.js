import React, {useState} from "react";
//eslint-disable-next-line no-unused-vars
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

export function GetByCategory() {
    const url = "http://localhost:8080/groceries/";
    const [results, setResults] = useState();
    const [isLoading, setLoading]= useState(true);

    const [errorHandle, setErrorHandle] = useState(false);

    const [category, setCategory] = useState();

    async function getByCategory(e) {
        e.preventDefault();
        if (checkError(category) === true) {
            setLoading(true);
            const result = await axios.get(url + 'getByCategory?category=' + category);
            setErrorHandle(false);
            setResults(result.data);
            setLoading(false);
        }
        
    }
    function checkError(category) {
        if (category.length === 0) {
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
                <form onSubmit={getByCategory}>
                    <br/>
                    <h2><u>Enter the name of the category you would like to see:</u></h2><br/><br/>
                    <TextField id="filled-hidden-label-small" error={errorHandle} variant="filled" size="small" label="Category" onChange={e => {setCategory(e.target.value); checkError()}}/> <br/><br/>
                    <input type="submit" value="Search"/> <br/><br/>
                </form>
            </div>

            {isLoading ? '' : 
            <TableContainer component={Paper} style={{paddingLeft: 120, width:'auto'}}>
                <Table aria-label="Results for category">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Quantity</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {results.map((items) => (
                            <StyledTableRow key={items.name}>
                                <StyledTableCell component="th" scope="row">
                                    {items.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{items.quantity}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            }
        </div>
    )
}