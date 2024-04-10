"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaAngleRight } from "react-icons/fa";
import SoloLevelingBG from "@/app/assets/SoloLevelingBG.jpg";
import Image from "next/image";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`search?anime=${encodeURIComponent(searchTerm)}`);
  }

  return (
    <div className="min-w-full min-h-screen flex justify-center p-16">
      <Image src={SoloLevelingBG} objectFit="cover" className="absolute z-0 top-0 left-0 object-cover max-h-screen h-screen min-w-full max-w-full opacity-30"></Image>
      <form
        className="mt-[80px] flex flex-row gap-x-6 min-h-14 max-h-14 z-10"
        onSubmit={handleSubmit}
      >
        <input
          className="w-auto md:w-[450px] px-4 py-3 rounded-lg outline-none text-sm"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for an anime.."
        />
        <button
          className="w-[120px] rounded-lg bg-blue-500 text-white flex flex-row px-4 py-3 items-center"
          type="submit"
        >
          Search <FaAngleRight className="ml-6" size="20px" color="#FFFFFF" />
        </button>
      </form>
    </div>
  );
}
