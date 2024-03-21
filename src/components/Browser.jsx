import useMovieList from "../hooks/useMovieList";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/movieSlice";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browser = () => {
  const gptSearch = useSelector((state) => state.gpt.gptSearch);

  useMovieList("now_playing", addNowPlayingMovies);
  useMovieList("popular", addPopularMovies);
  useMovieList("top_rated", addTopRatedMovies);
  useMovieList("upcoming", addUpcomingMovies);

  return (
    <div className="">
      <Header />
      {gptSearch ? (
        <>
          <GptSearchPage />
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
