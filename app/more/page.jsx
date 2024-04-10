import { Suspense } from 'react';
import { trending, popular } from '../functions/anilist.js';
import Image from 'next/image';

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
    <div className="mt-20">
    <div>
    <h1 className="text-2xl text-center font-bold bg-opacity-50 backdrop-blur-sm bg-clip-text bg-gradient-to-r text-white from-slate-50 via-white/25 to-slate-50 animate-gloss">Trending</h1>
    </div>
    <div className="mt-4 mb-4 grid grid-flow-col auto-cols-max max-w-screen grid-rows-1 gap-1 overflow-x-auto h-36">
    {m.map((x, index) => (
    <div className="relative w-24 h-full flex items-stretch" key={x?.title?.romaji}>
    <Image src={x.image} alt="Anime pic" className="w-full h-full object-contain opacity-75 border-2 border-violet-500" />
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