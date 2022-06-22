import React, {useEffect, useState} from "react";
import axios from "axios";
import { MenuBar } from "./MenuBar";
import { TextField } from "@mui/material";

export function GetByCategory() {
    const url = "http://localhost:8080/groceries/";
    const [results, setResults] = useState();
    const [isLoading, setLoading]= useState(true);

    const [errorHandle, setErrorHandle] = useState(false);

    const [category, setCategory] = useState();

    async function getByCategory(e) {
        e.preventDefault();
        if (checkError(category) == true) {
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
            <div align="center">
                <u>In category {category} there are the items:</u><br/><br/>
                {results.map((items) => {
                    return (
                        <div align="center">
                            Name: {items.name} <br/>
                            Quantity: {items.quantity} <br/><br/>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}