import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons'
/* eslint-disable react/prop-types */
const VideoTitle = ({movie}) => {
    const {title,overview} = movie
  return (
    <div className="pt-[16%] pl-14 text-white absolute bg-gradient-to-r from-black w-screen aspect-video opacity-85">
      <h1 className="text-5xl font-bold">{title}</h1>
      <div className="pt-5">
        <button className="bg-black py-2 px-5  text-white rounded-lg m-3 hover:bg-slate-100 hover:text-black font-bold"> <FontAwesomeIcon className="px-2" icon={faPlay} />Play</button>
        <button className="bg-black py-2 px-5  text-white rounded-lg  hover:bg-slate-100 hover:text-black font-bold"><FontAwesomeIcon className="px-2" icon={faCircleInfo} />Info</button>
      </div>
      <p className="pt-5 font-serif w-[35%] text-lg">{overview}</p>
      
    </div>
  );
};

export default VideoTitle;
