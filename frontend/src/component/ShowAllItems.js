import React, {useEffect, useState} from "react";
import axios from "axios";
import { MenuBar } from "./MenuBar";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import AutoSizer from "react-virtualized-auto-sizer";


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

export function ShowAllItems() {
    const url = "http://localhost:8080/groceries/";
    const [results, setResults] = useState();
    const [totals, setTotals] = useState();
    const [isLoading, setLoading]= useState(true);

    useEffect (() => {
        async function showAllItems() {
            setLoading(true);
            const result = await axios.get(url + 'showAllItems');
            const total = await axios.get(url + 'findTotal');
            setResults(result.data);
            setTotals(total.data);
            setLoading(false);
        }
        showAllItems();
    }, []);

    return (
        <div>
            <MenuBar/>
            {isLoading ? 
            <h3 align="center">No Items in System</h3> : 
            <TableContainer component={Paper} style={{paddingLeft: 120, width:'auto'}}>
                <Table aria-label="All Items In System" >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID [ {totals} item(s) ]</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">Quantity</StyledTableCell>
                            <StyledTableCell align="right">Category</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {results.map((items) => (
                            <StyledTableRow key={items.id}>
                                <StyledTableCell component="th" scope="row">
                                    {items.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{items.name}</StyledTableCell>
                                <StyledTableCell align="right">{items.quantity}</StyledTableCell>
                                <StyledTableCell align="right">{items.category}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            }
        </div>
    );
}