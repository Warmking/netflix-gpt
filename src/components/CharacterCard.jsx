/* eslint-disable react/prop-types */
import { POSTER_IMG_CDN } from "../utils/constants"

const CharacterCard = ({profile,name}) => {
    if(!profile) return null
  return (
    <div className="text-white m-2 w-20 md:w-36">
      <img className="rounded-lg" alt="Character image" src={POSTER_IMG_CDN+profile} />
      <h1 className="font-mono p-2 text-center text-teal-500 text-sm md:text-lg">{name}</h1>
    </div>
  )
}

export default CharacterCard
