import { Suspense } from 'react';
import { trending } from '../functions/anilist.js';
import Image from 'next/image';

async function More() {
  const data = await trending();

  if (data.length <= 0) {
    return (
      <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-orange-500 dark:text-orange-400 text-lg md:text-xl">Something went wrong when fetching the information!</p></div>
    )
  };

  const m = data;

  return (
    <>
    <div className="ml-6 mr-6 mt-6 mb-20">
    {m ? (
    <div className="border-violet-700 border-2 mt-20 bg-violet-600">
    <div>
    <h1 className="text-2xl text-center font-bold bg-opacity-50 backdrop-blur-sm bg-clip-text bg-gradient-to-r text-orange-400 from-orange-400 via-orange-300/25 to-orange-400 animate-gloss">Trending</h1>
    </div>
    <div className="mt-4 mb-4 grid grid-flow-col auto-cols-max max-w-screen grid-rows-1 gap-0.5 overflow-x-auto h-36">
    {m.map((x, index) => (
    <div className="relative w-32 h-full flex items-stretch" key={x?.title?.romaji}>
    <Image src={x.image} alt="Anime pic" className="w-full h-full object-contain" />
    </div>
    ))}
    </div>
    </div>
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