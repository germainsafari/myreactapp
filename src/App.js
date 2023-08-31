import React, { useState } from "react";
//fab00538
import { useEffect } from "react";

import './App.css'
import searchIcon from './search.svg'
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=cac5d3d5'

const movie = {
  
        "Title": "Spiderman",
        "Year": "2010",
        "imdbID": "tt1785572",
        "Type": "movie",
        "Poster": "N/A",
   
}

const App = () => {
    const[movies, setMovies] = useState([])
    const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data)

    }
    useEffect(() => {
        searchMovies('spiderman')
    }, []);
    return (
        <div className="app">
            <h1>Movieland</h1>
            <div className="search">
                <input  
                value="superman"
                 placeholder="search for movies"/>
                 onChange={() => {}}
                 <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => {}}
                 />
            </div>
            <div className="container">
                <MovieCard movie={movies[0]}/>

            </div>
            {
                movies.length > 0
                ? (<div className="container">
                    {movies.map((movie)=> (
                        <MovieCard movie={movie.Title}/>
                    ))}
                    </div>) : (
                    <div className="empty">
                        <h3>There is no movie</h3>
                    </div>
                )
            }
        </div>
    );
};

export default App;