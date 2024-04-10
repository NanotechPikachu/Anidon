import { Suspense } from 'react';
import { trending, popular } from '../functions/anilist.js';
import Image from 'next/image';
import TRENDINGANIME from "@/app/assets/TRENDINGANIME.png";
import POPULARANIME2 from "@/app/assets/POPULARANIME2.png";
import NavBar from "@/app/components/NavBar.jsx";

async function More() {
  const data = await trending();
  const dat = await popular();

  if (data.length <= 0 || dat.length <= 0) {
    return (
      <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-orange-500 dark:text-orange-400 text-lg md:text-xl">Something went wrong when fetching the information!</p></div>
    )
  };

  const m = data;
  const n = dat;

  return (
    <>
    <div className="ml-6 mr-6 mt-6 mb-20">
    {m ? (
    <>
    <NavBar />
    <div className="mt-20 md:mt-24">
    <div className="w-full flex md:h-16 h-12 justify-center items-center">
    <Image src={TRENDINGANIME} alt="Trending Anime" className="h-full w-1/2 object-contain" />
    </div>
    <div className="hover:small-scroll mt-6 mb-4 grid grid-flow-col auto-cols-max max-w-screen grid-rows-1 gap-3 md:gap-6 overflow-x-auto h-36 md:h-56">
    {m.map((x, index) => (
    <div className="relative w-24 md:w-36 h-full flex items-stretch" key={x?.title?.romaji}>
    <Image src={x.image} alt="Anime pic" className="w-full h-full object-over opacity-75 border-2 border-violet-500" />
    </div>
    ))}
    </div>
    </div>
    <div className="mt-16 w-full flex md:h-16 h-12 justify-center items-center">
    <Image src={POPULARANIME2} alt="Popular Anime" className="h-full w-1/2 object-contain" />
    </div>
    <div className="hover:small-scroll mt-6 mb-4 grid grid-flow-col auto-cols-max max-w-screen grid-rows-1 gap-3 md:gap-6 overflow-x-auto h-36 md:h-56">
    {n.map((x, index) => (
    <div className="relative w-24 md:w-36 h-full flex items-stretch" key={x?.title?.romaji}>
    <Image src={x.image} alt="Anime pic" className="w-full h-full object-over opacity-75 border-2 border-violet-500" />
    </div>
    ))}
    </div>
    </>
    ) : (<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-orange-500 dark:text-orange-400 text-lg md:text-xl">No results Found!</p></div>)}
    </div>
    </>
  );
}

export default function Mre({ params, searchParams }) {
  return (
    <Suspense fallback={<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-violet-600 text-lg md:text-xl">Loading...</p></div>}>
      <More />
    </Suspense>
  );
}
