"use client";

import { FaAngleRight } from "react-icons/fa";

export default function Search() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
      <div className="min-w-full min-h-screen flex justify-center p-16">
      <form
        className="mx-[10px] mt-[80px] flex flex-row gap-x-6 h-auto max-h-14 z-10"
        onSubmit={handleSubmit}
      >
        <input
          className="w-fit sm:w-auto md:w-[450px] px-2 sm:px-4 py-2 sm:py-3 rounded-lg outline-none text-sm"
          type="text"
          value={""/*searchTerm*/}
          onChange={console.log("hi")/*(e) => setSearchTerm(e.target.value)*/}
          placeholder="Search for an anime.."
        />
        <button
          className="text-sm sm:text-base w-fit sm:w-[120px] rounded-lg bg-violet-500 text-white flex flex-row px-2 sm:px-4 py-2 sm:py-3 items-center"
          type="submit"
        >
          Search{" "}
          <FaAngleRight className="ml-3 sm:ml-6" size="20px" color="#FFFFFF" />
        </button>
      </form>
      </div>
  )
}