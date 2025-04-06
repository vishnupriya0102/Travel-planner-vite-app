import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleStickyHeader = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    };

    window.addEventListener('scroll', handleStickyHeader);
    
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []); 

  return (
    <header ref={headerRef} className="bg-blue-600 flex items-center justify-between p-5 text-white">
      <Link to="/" className="text-2xl  hover:text-orange-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-tent"
        >
          <path d="M3.5 21 14 3" />
          <path d="M20.5 21 10 3" />
          <path d="M15.5 21 12 15l-3.5 6" />
          <path d="M2 21h20" />
        </svg>
      </Link>
      <h2 className="lg:text-4xl md:text-2xl sm:text-xl">CampJourney</h2>
      <div className="navigation"
       >
        <Link to="/home" className="lg:text-2xl md:text-xl hover:text-orange-400">Home</Link>
        <Link to="/about" className="lg:text-2xl md:text-xl hover:text-orange-400 pr-4 pl-4">About</Link>
        <button className='bg-emerald-500 p-2 border border-dotted rounded-full'><Link to="/login-signup" className="lg:text-2xl md:text-xl hover:text-violet-800 ">LogIn/SignUp</Link></button>
      </div>
    </header>
  );
};

export default Header;
