import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Subcontainer = () => {

  const movies = useSelector((store) => store.movies)
  console.log(movies);

  return (
    movies &&(
      <div className=' bg-black'>
        <div className=' -mt-52 pl-12 relative z-20'>
          <MovieList title={'Now Playing'} movies={movies.nowplayingMovies} />
          <MovieList title={'Popular'} movies={movies.popularMovies} />
          <MovieList title={'Trending'} movies={movies.nowplayingMovies} />
          <MovieList title={'Upcomming'} movies={movies.nowplayingMovies} />
        </div>
      </div>
    )

  )
}

export default Subcontainer
