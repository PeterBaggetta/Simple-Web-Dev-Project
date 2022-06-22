import React, {useEffect, useState} from "react";
import axios from "axios";
import { MenuBar } from "./MenuBar";
import { TextField } from "@mui/material";

export function UpdateItemQuantity() {
    const url = "http://localhost:8080/groceries/";
    const [results, setResults] = useState();
    const [isLoading, setLoading]= useState(true);

    const [errorHandle0, setErrorHandle0] = useState(false);
    const [errorHandle1, setErrorHandle1] = useState(false);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    async function updateItemQuantity(e) {
        e.preventDefault();
        if (checkError(name, quantity) === true) {
            setLoading(true);
            const result = await axios.put(url + 
                'updateItemQuantity?name=' + name +
                '&quantity=' + quantity);
                setResults(result.data);
                setLoading(false);
        }
    }
    function checkError(name, quantity) {
        if (name.length === 0) {
            setErrorHandle0(true);
        } else {
            setErrorHandle0(false);
        }
        if (quantity.length === 0) {
            setErrorHandle1(true);
        } else {
            setErrorHandle1(false);
        }
        if (name.length > 0 && quantity.length > 0) {
            return true;
        }
    }

    return (
        <div>
            <MenuBar/>
            <div align="center">
                <form onSubmit={updateItemQuantity}>
                    <br/>
                    <h2><u>Enter the name of the item along with its new quantity:</u></h2> <br/><br/>
                    <TextField id="filled-hidden-label-small" error={errorHandle0} variant="filled" size="small" label="Item Name" onChange={e => {setName(e.target.value); checkError()}}/> <br/><br/>
                    <TextField id="standard-number" error={errorHandle1} variant="standard" size="small" label="New Quantity"type="number" onChange={e => {setQuantity(e.target.value); checkError()}}/> <br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            {isLoading ? '' :
            <div align="center">
                Updated Item {name} to a quantity of {quantity}
            </div>}
        </div>
    )
}