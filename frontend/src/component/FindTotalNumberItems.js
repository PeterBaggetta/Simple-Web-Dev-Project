import React, {useEffect, useState} from "react";
import axios from "axios";
import { MenuBar } from "./MenuBar";

export function FindTotalNumberItems() {
    const url = "http://localhost:8080/groceries/";
    const [results, setResults] = useState();
    const [isLoading, setLoading]= useState(true);

    useEffect(() => {
        async function findTotalNumberItems() {
            setLoading(true);
            const result = await axios.get(url + 'findTotal');
            setResults(result.data);
            setLoading(false);
        }
        findTotalNumberItems();
    }, []);

    return (
        <div>
            <MenuBar/>
            {isLoading ? 
            <h3 align="center">No Items in System</h3> :
            <div align="center">
                <h4>There are {results} item(s) currently <br/> in the system</h4>
            </div>}
        </div>
    )
}