import React from 'react'
import "./App.css";

const GenreFilter = ({ genres }) => {
    const buttonPress = (genre) => {
        console.log(`Filtering by ${genre}`);
      };
    
  return (
    <div id="GenreFilter">
        <div id="subtitle"><h3>Filter by Genre</h3></div>
        <div id="btn">
            {genres.map((genre, index) => (
            <button key={index} onClick={() => buttonPress(genre)}>
            {genre}
            </button>
             ))}            
        </div>
    </div>
  )
}

export default GenreFilter