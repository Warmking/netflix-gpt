/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import { OPTIONS } from "../utils/constants"
import { addGenre } from "../utils/movieSlice"
import { useEffect } from "react"


const useGenre = () => {
    const dispatch = useDispatch()
    const genres = useSelector(state => state.movie.genre)
    const genresList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en',OPTIONS)
        const json = await data.json()
        dispatch(addGenre(json.genres))
    }
    useEffect(()=>{

       if(!genres) genresList()
    },[])

}

export default useGenre