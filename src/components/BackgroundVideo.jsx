/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const BackgroundVideo = ({ videoId }) => {
  const trailer = useSelector(state => state.movie.trailer)
  useTrailer(videoId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailer?.key+"?controls=0&autoplay=1&mute=1&loop=1&playlist="+trailer?.key}
        title="YouTube video player"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
