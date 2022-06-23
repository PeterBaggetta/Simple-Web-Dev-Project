import React, {useState} from "react";
import axios from "axios";
import { MenuBar } from "./MenuBar";
import { TextField } from "@mui/material";

export function DeleteItem() {
    const url = "http://localhost:8080/groceries/";
    const [isLoading, setLoading]= useState(true);

    const [errorHandle, setErrorHandle] = useState(false);

    const [id, setId] = useState('');

    async function deleteItem(e) {
        e.preventDefault();
        if (checkError(id) === true) {
            setLoading(true);
            const result = await axios.delete(url + 'deleteItem?id=' + id);
            setLoading(false);
        }
    }
    function checkError(id) {
        if (id.length === 0) {
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
                <form onSubmit={deleteItem}>
                    <br/>
                    <h2><u>Enter the id of the item you would like to delete:</u></h2><br/><br/>
                    <TextField id="filled-hidden-label-small" error={errorHandle} variant="filled" size="small" label="Item Id" onChange={e => {setId(e.target.value); checkError()}}/> <br/><br/>
                    <input type="submit" value="Delete"/>
                </form>
            </div>
            {isLoading ? '' :
            <div align="center">
                Item Deleted
            </div>}
        </div>
    )
}