/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./VideoTitle";

const maincontainer = () => {
  const nowPlayingMovies = useSelector(store => store.movie.nowPlayingMovies)

  if(!nowPlayingMovies) return null;

  const trendingMovie = nowPlayingMovies[9]
  return (
    <div className="">
     <VideoTitle movie={trendingMovie}/>
     <BackgroundVideo videoId={trendingMovie.id}/>
    </div>
  );
};

export default maincontainer;
