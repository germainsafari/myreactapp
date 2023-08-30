import React from "react";
//fab00538
import { useEffect } from "react";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=cac5d3d5'
const App = () => {

    const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data)

    }
    useEffect(() => {
        searchMovies('spiderman')
    }, []);
    return (
        <h1>App</h1>
    );
};

export default App;