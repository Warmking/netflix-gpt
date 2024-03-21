/* eslint-disable react/prop-types */
import { POSTER_IMG_CDN } from "../utils/constants"

const MovieCard = ({poster}) => {
  if(!poster) return null;
  return (
      <div className="w-44 m-2">
        <img className="rounded-md" alt="poster" src={POSTER_IMG_CDN+poster}/>
      </div>
  )
}

export default MovieCard
