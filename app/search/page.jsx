"use client"

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { search } from '../functions/gogo.js';
import Image from 'next/image'

function Result() {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  const params = useSearchParams();
  const anime = params.get('anime');

  useEffect(() => {
    if (anime) {
      setLoading(true);
      search(anime).then((ans) => {
        console.log(ans);
        setData(ans);
        setLoading(false);
      });
    }
  }, [anime]);

  const m = data.results;
  return (
    <>
    <div className="ml-6 mr-6">
    <div className="mt-18">
    <h1 className="text-xl text-center font-bold">Search results...</h1>
    </div>
    <div className="mt-6 grid grid-flow-row grid-cols-3 overflow-hidden gap-4"> 
    {loading ? (
        <p>Loading...</p>
      ) : m.length > 0 ? (m?.map((x, index) => ( 
    <div key={index} className="border-2 border-teal-100 overflow-hidden h-20 flex flex-col relative">
    <Image src={x.image} layout="fill" objectFit="cover" alt="Anime pic" />
    <p className="text-base">Anime: {x.title}</p>
     </div>
    ))) : (<p>No results</p>)}
    </div>
    </div>
    </>
  );
}

export default function Res() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen items-center justify-center><p>Loading...</p></div>}>
      <Result />
    </Suspense>
  );
}
