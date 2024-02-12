import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowplayingmovies } from '../utils/moviesSlice'
import { API_OPTIONS } from '../utils/constants'



    function useNowPlayingMovies() {
        const dispatch = useDispatch();
      
        const nowPlayingMovie = async () => {
          try {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
            const jsonData = await data.json();
            
            dispatch(addNowplayingmovies(jsonData.results));
          } catch (error) {
            console.error('Error fetching now playing movies:', error);
          }
        };
      
        useEffect(() => {
          nowPlayingMovie();
        }, []);

    return (
        <div>

        </div>
    )
}

export default useNowPlayingMovies
