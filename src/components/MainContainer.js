import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import Subcontainer from './Subcontainer'

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowplayingMovies)

    if(!movies)return
    const mainMovie=movies[0]



    const {original_title,overview,id}=mainMovie
  return (
    <div>
   <VideoTitle original_title={original_title} overview={overview}/>
   <VideoBackground id={id}/>
   <Subcontainer/>
    </div>
  )
}

export default MainContainer
