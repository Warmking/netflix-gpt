/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constants";
import CharacterCard from "./CharacterCard";

const MovieCast = ({ movieId }) => {
  const [cast, setCast] = useState(null);
  const [crew, setCrew] = useState(null);
  const movieCastList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/credits?language=en-US",
      OPTIONS
    );
    const json = await data.json();
    setCast(
      json.cast.filter(
        (char, index, arr) => arr.findIndex((o) => o.id === char.id) === index
      )
    );

    setCrew(
      json.crew.filter(
        (char, index, arr) => arr.findIndex((o) => o.id === char.id) === index
      )
    );
  };
  useEffect(() => {
    movieCastList();
  }, []);

  if (!cast || !crew) return;
  return (
    <div className="text-white md:mx-5 mt-10">
      <h1 className="md:mx-8 mx-4 mt-3 px-3 text-sm md:text-lg text-black inline-block bg-slate-400 rounded-lg font-serif py-1 font-bold md:">
        Cast
      </h1>
      <div className="flex overflow-x-scroll md:px-5 px-2 md:py-2">
        <div className="flex m-2">
          {cast.map((char, index) => (
            <CharacterCard
              key={index}
              profile={char.profile_path}
              name={char.original_name}
            />
          ))}
        </div>
      </div>
      <h1 className="md:mx-8 mx-4 md:mt-3 px-3 text-sm md:text-lg text-black inline-block bg-slate-400 rounded-lg font-serif py-1 font-bold">
        Crew
      </h1>
      <div className="flex overflow-x-scroll md:px-5 px-2 md:py-2">
        <div className="m-2 flex">
          {crew.map((char, index) => (
            <CharacterCard
              key={index}
              profile={char.profile_path}
              name={char.original_name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCast;
