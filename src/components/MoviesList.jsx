/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MoviesList = ({ title,movies }) => {
  return (
    <div className= "md:px-7 px-2">
    <h1 className="text-teal-400 md:text-2xl font-bold md:py-4 py-2 font-serif">{title}</h1>
    <div className="flex overflow-x-scroll">
      <div className="flex">
        {movies &&
          movies.map((movie) => (
          <Link to='/movieInfo' state={{movie:{movie} }} key={movie.id}>  <MovieCard  poster={movie.poster_path} /> </Link>
          ))}
      </div>
      </div>
    </div>
  );
};

export default MoviesList;
