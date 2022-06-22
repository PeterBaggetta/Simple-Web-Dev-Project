import React, { useEffect, useState } from "react";
import axios from "axios";
import { MenuBar } from "./MenuBar";
import { InputLabel, TextField } from "@mui/material";

export function AddItems() {
    const url = "http://localhost:8080/groceries/";
    const [results, setResults] = useState();
    const [isLoading, setLoading]= useState(true);

    const [errorHandle0, setErrorHandle0] = useState(false);
    const [errorHandle1, setErrorHandle1] = useState(false);
    const [errorHandle2, setErrorHandle2] = useState(false);
    const [errorHandle3, setErrorHandle3] = useState(false);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');

    async function AddItems(e) {
        e.preventDefault();
        if (checkError(id, name, quantity, category) == true) {
            setLoading(true);
            const result = await axios.post(url + 'addItems?id=' +id+
            '&name=' +name+
            '&quantity=' +quantity+
            '&category=' +category);
            setErrorHandle0(false);
            setErrorHandle1(false);
            setErrorHandle2(false);
            setErrorHandle3(false);
            setResults(result.data);
            setLoading(false); 
        }              
    }
    function checkError(id, name, quantity, category) {
        if (id.length === 0) {
            setErrorHandle0(true);
        } else {
            setErrorHandle0(false);
        }
        if (name.length === 0) {
            setErrorHandle1(true);
        } else {
            setErrorHandle1(false);
        }
         if (quantity.length === 0) {
            setErrorHandle2(true);
        } else {
            setErrorHandle2(false);
        }
         if (category.length === 0) {
            setErrorHandle3(true);
        } else {
            setErrorHandle3(false);
        }
        if (id.length > 0 && name.length > 0 && quantity.length > 0 && category.length > 0) {
            return true;
        }
    } 

    return (
        <div>
            <MenuBar/>
            <div align="center">
                <h2><u>Add Item to System</u></h2>
                <form onSubmit={AddItems}>
                    <br/>
                    <TextField id="filled-hidden-label-small" error={errorHandle0} variant="filled" size="small" label="Id" onChange={e => {setId(e.target.value); checkError()}}/> <br/><br/>
                    <TextField id="filled-hidden-label-small" error={errorHandle1} variant="filled" size="small" label="Name" onChange={e => {setName(e.target.value); checkError()}}/> <br/><br/>
                    <TextField id="standard-number" error={errorHandle2} variant="standard" size="small" label="Quantity"type="number" onChange={e => {setQuantity(e.target.value); checkError()}}/> <br/><br/>
                    <TextField id="filled-hidden-label-small" error={errorHandle3} variant="filled" size="small" label="Category" onChange={e => {setCategory(e.target.value); checkError()}}/> <br/><br/>
                    <input type="submit" value = "Submit"/>
                    </form>
            </div>
            
            {isLoading ? '' : 
            <div align="center">
            <b>Item Added To System</b>
            </div>
            }
        </div>
    )
}