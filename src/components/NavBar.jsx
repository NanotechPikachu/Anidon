"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchItem, setsearchItem] = useState("");

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!searchItem?.trim()) return;
    redirect(`/search/${encodeURIComponent(searchItem)}`);
  };

  return (
    <>
      <div className="top-0 w-full h-16 bg-blue-900 p-4 z-10 fixed flex items-center justify-between">
        <div>
          <p className="ml-8 text-2xl font-bold">ANIDON</p>
        </div>
        <div>
          <form className="hidden lg:block" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="bg-gray-200 text-gray-900 rounded-lg p-2 w-md mr-2"
              placeholder="Search for an anime..."
              onChange={(v) => setsearchItem(v?.target?.value)}
            />
          </form>
          <button className="text-white block lg:hidden" onClick={toggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen ? (
        <div className="w-full h-30 bg-blue-900 transition ease-in-out transition-transform translate-y-3 duration-300 lg:hidden">
          <form className="ml-6 mr-6 p-16" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="bg-gray-200 text-gray-900 rounded-lg p-2 w-full mr-2"
              placeholder="Search for an anime..."
              onChange={(v) => setsearchItem(v?.target?.value)}
            />
          </form>
        </div>
      ) : (
        <div />
      )}
    </>
  );
}
