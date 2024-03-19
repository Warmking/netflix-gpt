import { OPTIONS } from "../utils/constants";
import Header from "./Header";
import { useEffect } from "react";
import MainContainer from './MainContainer'

const Browser = () => {
  const movieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      OPTIONS
    );
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    movieList();
  }, [])

  return (
    <div>
      <Header/>
      <MainContainer/>
    </div>
  );
}


export default Browser;
