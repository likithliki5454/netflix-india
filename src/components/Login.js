import React, { useRef, useState } from 'react'
import Header from './Header'
import mainimage from '../utils/mainimage.jpg'
import { checkvaliddata } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase';


const Login = () => {

    const [issignin, setissignin] = useState(true)
    const [errormessage, seterrormessage] = useState(null)

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const handleSignintoggle = () => {
        setissignin(!issignin)
    }

    const handlebuttonclick = () => {
        const message = checkvaliddata(email.current.value, password.current.value)
        seterrormessage(message)
        if (message) return

        if (!issignin) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value, name.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrormessage('Invalid User Credential')
                    // ..
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrormessage('Invalid User Credential')
                });

        }

    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={mainimage} alt='no img' />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className=' w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75'>
                <h1 className='font-bold py-4 text-3xl'>{issignin ? 'Sign In' : 'Sign Up'}</h1>
                <input ref={email} type='text' placeholder='Email adress' className='p-4 my-4 w-full bg-gray-700' />
                {issignin ?
                    '' :
                    <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />
                }
                <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                <p className='text-red-600'>{errormessage}</p>
                <button className='p-4 my-6  bg-red-700 w-full rounded-lg' onClick={handlebuttonclick}>{issignin ? 'Sign In' : 'Sign Up'}</button>
                <p onClick={handleSignintoggle} className='py-4 cursor-pointer'>{issignin ? 'New To Netflix? Sign Up Now' : 'Already Registered? Sign In Now'}</p>
            </form>

        </div>
    )
}

export default Login
