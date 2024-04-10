"use client"

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { search } from '../functions/gogo.js';
import Image from 'next/image';

function Result() {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(true);
  const params = useSearchParams();
  const anime = params.get('anime');
  const router = useRouter();

  function changePage(id) {
    router.push(`info?id=${encodeURIComponent(id)}`);
  };

  useEffect(() => {
    if (anime) {
      search(anime).then((ans) => {
        setData(ans);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [anime]);

  const m = data.results;
  return (
    <>
    <div className="ml-6 mr-6 mb-20">
    <div className="mt-20">
    <h1 className="text-2xl text-center font-bold text-white">Search results...</h1>
    <p className="text-center font-mono text-sm text-white"><i>Query: {anime}</i></p>
    </div>
    <div className="mt-6 grid grid-flow-row grid-cols-3 overflow-hidden gap-4 justify-center justify-items-center items-center"> 
    {loading ? (
    <p className="text-violet-600 text-lg md:text-xl animate-bounce">Loading...</p>
      ) : m.length > 0 ? (m?.map((x, index) => ( 
    <div key={index} className="border-2 border-violet-700 overflow-hidden flex flex-col relative cursor-pointer w-24 md:w-36 h-40 md:h-60 overflow-y-auto hide-scroll" onClick={() => changePage(x.id)}>
    <div className="w-24 md:w-36 h-36 md:h-56">
    <Image src={x.image} alt="Anime pic" className="w-full h-full opacity-75 object-over" />
    </div>
    <p className="ml-1 mr-1 text-base text-white text-center">{x.title}</p>
     </div>
    ))) : (<p className="text-orange-500 dark:text-orange-400 text-lg md:text-xl">No results</p>)}
    </div>
    </div>
    </>
  );
}

export default function Res() {
  return (
    <Suspense fallback={<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-violet-600 text-lg md:text-xl animate-bounce">Loading...</p></div>}>
      <Result />
    </Suspense>
  );
}
