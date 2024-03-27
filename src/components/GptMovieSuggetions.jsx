import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggetions = () => {
  const { movieNames, movieResults } = useSelector((state) => state.gpt);

  if (!movieNames) return null;

  return (
    <div className="md:px-10 md:mx-10 md:mt-24 md:rounded-2xl bg-gradient-to-r from-slate-950 bg-black opacity-90 my-2">
      <div>
        {movieNames.map((movie, index) => (
          <MoviesList key={movie} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggetions;
