import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Navigation links for navbar
  const NavbarLinks = [
    { label: 'Homepage', link: '/' },
    { label: 'About', link: '/about' },
  ];
  return (
    <nav className='bg-[url("https://i.ibb.co/88swFYN/bg-header.webp")] bg-center p-36'>
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        <div className='flex justify-between'>
          <Link href='/' className='flex items-center text-white text-4xl'>
            Book App
          </Link>
          <div className='hidden md:block'>
            <div className='flex items-center'>
              {NavbarLinks.map(({ label, link }, index) => (
                <Link
                  key={index}
                  href={link}
                  className='text-white hover:bg-neutral-600 hover:text-white px-3 py-2 rounded-md text-lg font-medium'
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={handleToggle}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-200 focus:ring-white'
            >
              <span className='sr-only'>Open/Close Menu</span>
              {isOpen ? (
                <svg
                  className='h-6 w-6 fill-white'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Close</title>
                  <path
                    fillRule='evenodd'
                    d='M18.293 3.293a1 1 0 00-1.414-1.414L10 8.586 3.121 1.707A1 1 0 101.707 3.12L8.586 10l-6.879 6.879a1 1 0 101.414 1.414L10 11.414l6.879 6.879a1 1 0 001.414-1.414L11.414 10l6.879-6.879z'
                    clipRule='evenodd'
                  />
                </svg>
              ) : (
                <svg
                  className='fill-white h-6 w-6'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Menu</title>
                  <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} text-right md:hidden`}>
        <div className='inline-flex flex-col p-4 space-y-1 sm:px-3'>
          {NavbarLinks.map(({ label, link }, index) => (
            <Link
              key={index}
              href={link}
              className='text-white hover:bg-amber-200 hover:text-white px-3 py-2 rounded-md text-lg font-medium'
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
