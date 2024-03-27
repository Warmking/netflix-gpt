/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import { POSTER_IMG_CDN } from "../utils/constants";
import MovieCast from "./MovieCast";
import useGenre from "../hooks/useGenre";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Genre = ({title}) => {
  
  return (
    <div className="md:px-2 md:py-4 px-1 py-2">
      <h1 className="md:text-lg text-sm text-white inline-block bg-teal-900 shadow-sm rounded-lg font-serif py-1 px-3">{title}</h1>
    </div>
  )
}

const MovieInfo = () => {
  const navigate = useNavigate()
  const handleNavigation = () => {
    navigate('/browse')
  } 
  useGenre()
  const location = useLocation();
  const { movie } = location.state.movie;
  const genres = useSelector(state => state.movie.genre)
  console.log(movie);
  if(!genres) return null;
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 aspect-video relative">
      <button className="bg-cyan-800 md:px-3 md:py-1 md:mx-5 md:mt-3 px-2 mx-2 mt-2 rounded-lg text-white opacity-50 " onClick={handleNavigation}><FontAwesomeIcon icon={faArrowLeft} /></button>
      <div className="md:pt-[9%] ">
        <div className="md:justify-self-center md:pl-[15%] pl-[8%] md:flex">
          <div className="md:w-72 w-44 ml-10 md:ml-0">
            <img
              className="rounded-md"
              alt="poster"
              src={POSTER_IMG_CDN + movie.poster_path}
            />
          </div>
          <div className="text-white md:mx-8 m-4 md:w-1/2">
            <h1 className="md:text-4xl text-xl font-serif text-sky-600 font-bold">{movie.original_title}</h1>
            <p className="font-sans md:p-4 px-4 py-2 text-sm md:text-lg">{movie.overview}</p>
            <div>
              <h1 className="md:text-xl text-lg font-bold text-cyan-600">Genre</h1>
              <div className="flex md:mx-4 overflow-x-scroll">
                {
                  movie.genre_ids.map((id,index)=>{
                      const genreItem = genres.find(obj => obj.id === id )
                      return <Genre key={index} title={genreItem.name} />
                  })
                }
              </div>
              <h1 className="md:text-lg text-orange-600 font-bold">{movie.title} - {movie.release_date}</h1>
            </div>
          </div>
          
        </div>
        <div className="w-full">
          <MovieCast movieId={movie.id}/>
          </div>
        
      </div>
    </div>
  );
};

export default MovieInfo;
