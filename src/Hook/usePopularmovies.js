import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { API_OPTIONS } from '../utils/constants'
import { addPopularmovies} from '../utils/moviesSlice';



    function usePopularmovies() {
        const dispatch = useDispatch();
      
        const PopularMovie = async () => {
          try {
            const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
            const jsonData = await data.json();
            dispatch(addPopularmovies(jsonData.results))
          } catch (error) {
            console.error('Error fetching now playing movies:', error);
          }
        };
      
        useEffect(() => {
          PopularMovie();
        }, []);

    return (
        <div>

        </div>
    )
}

export default usePopularmovies
