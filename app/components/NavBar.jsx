'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function NavLinks({ toggleNavBar }) {
  let navigate = useRouter();

  function page(link) {
    navigate.push(link);
  };

  return (
    <>
    <nav className="mt-12">
    {
    /* hi */
    }
    </nav>
    </>
  )
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen);
  }, [isOpen]);

  function toggleNavBar() {
  setIsOpen(!isOpen);
};

  return (
    <div>
    <div className="backdrop-blur fixed top-0 left-0 w-full flex items-center justify-between py-4 px-8 border-b border-primary-color shadow-md z-20">
    <Link href="/"><p className="font-bold text-left text-violet-800 hover:text-purple-400 text-xl md:text-2xl font-sans">
    Anidon
    </p></Link>
    <div className={`fixed top-0 right-0 m-3 p-1 border-2 border-violet-900 hover:border-purple-500 ${isOpen ? 'hidden' : 'block'}`}
        onClick={toggleNavBar}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
    </svg>
    </div>
    </div>
    <div
        className={`fixed z-30 top-0 right-0 w-full h-full min-h-screen overflow-y-auto hide-scroll bg-black p-4 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out`}
      >
    <div className="absolute top-0 left-0 m-3 p-1 border-2 border-violet-900 hover:border-purple-500"
          onClick={toggleNavBar}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
    <path fillRule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z" clipRule="evenodd" />
    </svg>
    </div>
    <NavLinks toggleNavBar={toggleNavBar} />
    </div>
    </div>
  );
};

