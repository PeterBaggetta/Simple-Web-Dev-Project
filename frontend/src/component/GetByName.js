import React, { useEffect, useState } from "react";
import axios from "axios";
import { MenuBar } from "./MenuBar";
import { TextField } from "@mui/material";

export function GetByName() {
    const url = "http://localhost:8080/groceries/";
    const [results, setResults] = useState();
    const [isLoading, setLoading]= useState(true);

    const [errorHandle, setErrorHandle] = useState(false);

    const [name, setName] = useState('');

    async function GetByName(e) {
        e.preventDefault();
        if (checkError(name) == true) {
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
            <div align="center">
                <p>Id: {results.id} </p>
                <p>Name: {results.name}</p>
                <p>Quantity: {results.quantity}</p>
                <p>Category: {results.category}</p>
            </div>}
        </div>
    )
}