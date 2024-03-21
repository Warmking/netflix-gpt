import { useSelector } from "react-redux"
import MoviesList from "./MoviesList"

const SecondaryContainer = () => {
  const movies = useSelector(state => state.movie)
  return (
    <div className="bg-black">
    <div className="relative -top-28">
      <MoviesList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
      <MoviesList title={"Top Rated"} movies={movies.topRated}/>
      <MoviesList title={"Popular"} movies={movies.popular}/>
      <MoviesList title={"Upcoming"} movies={movies.upComing}/>
    </div>
    </div>
  )
}

export default SecondaryContainer