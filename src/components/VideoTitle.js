import React from 'react'

const VideoTitle = ({original_title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{original_title}</h1>
      <p className='text-lg py-6 w-1/3'>{overview}</p>
      <div className=''>
      <button className='bg-white text-black p-4 px-12 text-xl  rounded-l hover:bg-opacity-90'>Play</button>
      <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-l'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle