import React, { useEffect } from 'react'
import Header from './Header'
import usenowplayingmovies from '../Hook/usenowplayingmovies'
import MainContainer from './MainContainer'
import useTrendingmovies from '../Hook/usePopularmovies'



const Browse = () => {

  usenowplayingmovies()
  useTrendingmovies()

  return (
    <div>
      <Header/>
      <MainContainer/>
    </div>
  )
}

export default Browse
