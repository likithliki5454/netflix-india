import NetflixLogo from '../utils/Netflix_Logo.jpg';

const Header = () => {
  return (
    <div className='absolute  px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={NetflixLogo} alt="Netflix Logo" />
    </div>
  );
}

export default Header;
