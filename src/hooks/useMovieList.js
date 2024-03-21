/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieList = (type,fun) => {
  const dispatch = useDispatch()
  const movieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+type+"?page=1",
      OPTIONS
    );
    const json = await data.json();

      dispatch(fun(json.results))
  };

  useEffect(() => {
    movieList();
  }, []);
};

export default useMovieList;
