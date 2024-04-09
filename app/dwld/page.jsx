import { Suspense } from 'react';
import { download, stream } from '../functions/gogo.js';

async function Download({ searchParams }) {
  const params = searchParams;
  const link = params?.link;
  const anime = params?.anime;
  const episode = params?.episode;

  if (!link) {
    return (
      <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center">
      <p className="text-violet-600 text-lg md:text-xl">Invalid Anime!</p>
      </div>
    );
  };

  let data = await download(link);
  let dat = await stream(link);
  let m = data;
  let y = dat?.sources;

  if (!m || !y) {
    return (
      <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center">
      <p className="text-violet-600 text-lg md:text-xl">Anime Not Found!</p>
      </div>
    );
  };

  return (
    <>
    <div className="ml-6 mr-6 mt-6 mb-20">
    {m ? (
    <div>
    <div className="mt-20">
    <h1 className="text-2xl text-center font-bold text-violet-900 hover:text-purple-400">{anime}</h1>
    <p className="font-mono mt-3 text-sm md:text-base text-center text-slate-50">{`Episode: ${episode}`}</p>
    </div>
    <div className="w-full mt-6">
    <h1 className="text-xl font-bold underline text-white">Stream Link(s)</h1>
    <div className="mt-2">
    {y?.map((i) => (
    <div key={i.quality} className="group border-2 border-violet-700 relative bg-black text-white hover:text-black transition duration-500 ease-in-out overflow-hidden cursor-pointer">
    <a href={i.url} className="block w-full h-full">
    <div className="absolute inset-0 bg-violet-500 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0 -translate-x-full"></div>
    <p className="relative p-2 cursor-pointer text-slate-50 transition-colors duration-500 ease-in-out group-hover:text-black">{i.quality}</p>
    </a>
    </div>
    ))}
    </div>
    </div>
    <div className="w-full mt-6">
    <h1 className="text-xl font-bold underline text-white">Download Link(s)</h1>
    <div className="mt-2">
    {m?.map((i) => ( 
    <div key={i.source} className="group border-2 border-violet-700 relative bg-black text-white hover:text-black transition duration-500 ease-in-out overflow-hidden cursor-pointer">
    <a href={i.link} className="block w-full h-full">
    <div className="absolute inset-0 bg-violet-500 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0 -translate-x-full"></div>
    <p className="relative p-2 cursor-pointer text-slate-50 transition-colors duration-500 ease-in-out group-hover:text-black">{i.source}</p>
    </a>
    </div> 
    ))}
    </div>
    </div>
    </div>
    ) : (<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-orange-500 dark:text-orange-400 text-lg md:text-xl">No results Found!</p></div>)}
    </div>
    </>
  );
}

export default function Dwld({ params, searchParams }) {
  return (
    <Suspense fallback={<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-violet-600 text-lg md:text-xl">Loading...</p></div>}>
      <Download searchParams={searchParams} />
    </Suspense>
  );
}
