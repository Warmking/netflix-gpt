import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggetions = () => {
  const { movieNames, movieResults } = useSelector((state) => state.gpt);

  if (!movieNames) return null;

  return (
    <div className="px-10 mx-10 mt-24 rounded-2xl bg-gradient-to-r from-slate-950 bg-black opacity-90">
      <div>
        {movieNames.map((movie, index) => (
          <MoviesList key={movie} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggetions;
