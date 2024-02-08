import React, { useState } from 'react'
import Header from './Header'
import mainimage from '../utils/mainimage.jpg'

const Login = () => {

    const [issignin, setissignin] = useState(true)

    const handleSignintoggle=()=>{
        setissignin(!issignin)
    }
  return (
    <div>
    <Header/>
    <div className='absolute'>
    <img src={mainimage} alt/>
    </div>

    <form className=' w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75'>
    <h1 className='font-bold py-4 text-3xl'>{issignin?'Sign In':'Sign Up'}</h1>
    <input type='text' placeholder='Email adress' className='p-4 my-4 w-full bg-gray-700'/>
    {issignin?
        '':
        <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>
    }
    <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
    <button className='p-4 my-6  bg-red-700 w-full rounded-lg'>{issignin?'Sign In':'Sign Up'}</button>
    <p onClick={handleSignintoggle} className='py-4 cursor-pointer'>{ issignin? 'New To Netflix? Sign Up Now': 'Already Registered? Sign In Now'}</p>
    </form>

 
    </div>
  )
}

export default Login
