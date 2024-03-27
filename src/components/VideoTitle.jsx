import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons'
/* eslint-disable react/prop-types */
const VideoTitle = ({movie}) => {
    const {title,overview} = movie
  return (
    <div className="md:pt-[16%] md:pl-14 pl-7 pt-[20%] text-white absolute bg-gradient-to-r from-black w-screen aspect-video opacity-85">
      <h1 className="md:text-5xl text-xl font-bold font-serif">{title}</h1>
      <div className="md:pt-5">
        <button className="bg-black md:py-2 md:px-5 py-1 px-2  text-white rounded-lg md:m-3 m-1 md:text-lg text-sm hover:bg-slate-100 hover:text-black font-bold"> <FontAwesomeIcon className="px-2" icon={faPlay} />Play</button>
        <button className="bg-black md:py-2 md:px-5 py-1 px-2 text-white rounded-lg md:text-lg text-sm hover:bg-slate-100 hover:text-black font-bold"><FontAwesomeIcon className="px-2" icon={faCircleInfo} />Info</button>
      </div>
      <p className="pt-5 font-serif w-[35%] text-lg md:block hidden">{overview}</p>
      
    </div>
  );
};

export default VideoTitle;
