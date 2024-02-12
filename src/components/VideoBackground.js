import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { showMovieTrailor } from '../utils/moviesSlice'


const VideoBackground = ({ id }) => {

    const dispatch = useDispatch()
    const TrailerVideo = useSelector((store) => store.movies?.movieTrailor)
  
    const getMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS)
        const jsonData = await data.json()
        const filterdata = jsonData.results.filter((data) => data.type === 'Trailer')
        const result = filterdata.length ? filterdata[0] : jsonData.results[0]
        dispatch(showMovieTrailor(result))
    }

    useEffect(() => {
        getMovieTrailer()
    }, [])

    return (
        <div className='w-screen'>

        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + TrailerVideo?.key + "?autoplay=1&mute=1&controls=0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>
    )
}

export default VideoBackground
