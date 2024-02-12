import Netflix_user from '../utils/Netflix_user.jpg';
import NetflixLogo from '../utils/Netflix_Logo.jpg';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';



const Header = () => {

  const navigate=useNavigate()
  const dispatch=useDispatch();

  const user=useSelector((store)=>store.user)
  const handleSignout=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });

  }



    useEffect(()=>{
    const unsubscribe=  onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName}=user
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
navigate('/browse')
          } else {
            dispatch(removeUser())
            navigate('/')
          }
        });
        return()=>unsubscribe()
  },[])



  return (
    <div className='absolute w-full  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={NetflixLogo} alt="Netflix Logo" />
    {user &&  
      <div className='flex items-center p-2 m-2'>
    <p className='p-2'>Welcome {user.displayName?user.displayName:'Guest' }</p>
      <img className='w-8 h-8' alt='usericon' src={Netflix_user}/>
      <button onClick={handleSignout} className='p-2 text-red-800 font-bold'>Sign Out</button>
      </div>}
    </div>
  );
}

export default Header;
