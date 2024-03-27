/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieList = (type, fun) => {
  const movies = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const movieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + type + "?page=1",
      OPTIONS
    );
    const json = await data.json();

    dispatch(fun(json.results));
  };

  useEffect(() => {
    if (!movies.fun) movieList();
  }, []);
};

export default useMovieList;
