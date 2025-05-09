"use client";

import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full h-16 bg-blue-900 p-4 z-10 fixed flex items-center justify-between">
        <div>
          <p className="ml-8 text-2xl font-bold">ANIDON</p>
        </div>
        <div>
          <form className="hidden lg:block">
            <input
              type="text"
              className="bg-gray-200 text-gray-900 rounded-lg p-2 w-md mr-2"
              placeholder="Search for an anime..."
            />
          </form>
          <button className="text-white block lg:hidden" onClick={toggleNav}>
            Clicky
          </button>
        </div>
      </div>
      {isOpen ? (
        <div className="w-full h-30 bg-blue-900 transition ease-in-out transition-transform translate-y-3 duration-300 lg:hidden">
          <form className="ml-6 mr-6 p-16">
            <input
              type="text"
              className="bg-gray-200 text-gray-900 rounded-lg p-2 w-full mr-2"
              placeholder="Search for an anime..."
            />
          </form>
        </div>
      ) : (
        <div />
      )}
    </>
  );
}
