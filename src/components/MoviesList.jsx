/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MovieCard from "./MovieCard";

const MoviesList = ({ title,movies }) => {
  return (
    <div className= "px-7">
    <h1 className="text-white text-2xl font-bold py-4">{title}</h1>
    <div className="flex overflow-x-scroll">
      <div className="flex">
        {movies &&
          movies.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
      </div>
      </div>
    </div>
  );
};

export default MoviesList;
