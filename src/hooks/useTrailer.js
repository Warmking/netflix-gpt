/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const useTrailer = (videoId) => {
    const dispatch = useDispatch()
    const trailer = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+videoId+"/videos?language=en-US",OPTIONS)
        const json = await data.json()
        const trailerList = json.results.filter((list)=>{
            return list.type === "Trailer"
        })
        const trailerVideo =  trailerList.length != 0 ? trailerList[0] : json.results[0]
        dispatch(addTrailer(trailerVideo))
    }
    useEffect(()=>{
        trailer()
    },[])
}

export default useTrailer
