import React from "react";

const MovieCard =({Movie}) => {
    return (
        <div className="movie">
                    <div>
                        <p>{Movie.Year}</p>
                    </div>
                    <div>
                        {/* <img src={Movie.Poster !== 'N/A ? Movie.Poster: 'https:visualViewport.placeholder.com/400'}  alt={Movie.title} /> */}
                        <img src={Movie.Poster !== 'N/A' ? Movie.Poster : 'https://placeholder.com/400'} alt={Movie.Title} />
                    </div>
                    <div>
                        <span>{Movie.Type}</span>
                        <h3>{Movie.Title}</h3>
                    </div>
                    
        </div>
    )
}

export default MovieCard;