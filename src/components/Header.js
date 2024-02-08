import Netflix_user from '../utils/Netflix_user.jpg';
import NetflixLogo from '../utils/Netflix_Logo.jpg';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {

  const navigate=useNavigate()


  const user=useSelector((store)=>store.user)
  const handleSignout=()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute w-full  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={NetflixLogo} alt="Netflix Logo" />
    {user &&  
      <div className='flex items-center p-2 m-2'>
    <p className='p-2'>Welcome {user.displayName?user.displayName:'Guest' }</p>
      <img className='w-8 h-8' alt='usericon' src={Netflix_user}/>
      <button onClick={handleSignout} className='p-2 font-bold'>Sign Out</button>
      </div>}
    </div>
  );
}

export default Header;
