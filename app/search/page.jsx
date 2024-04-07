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
    <div className="mt-20">
    <h1 className="text-xl text-center font-bold">Search results...</h1>
    <p className="text-center font-mono text-base"><i>Query: {anime}</i></p>
    </div>
    <div className="mt-6 grid grid-flow-row grid-cols-3 overflow-hidden gap-4"> 
    {loading ? (
        <p>Loading...</p>
      ) : m.length > 0 ? (m?.map((x, index) => ( 
    <div key={index} className="border-2 border-teal-100 overflow-hidden h-26 flex flex-col relative">
    <div>
    <img src={x.image} alt="Anime pic" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
    </div>
    <p className="ml-1 mr-1 text-base">Anime: {x.title}</p>
     </div>
    ))) : (<p>No results</p>)}
    </div>
    </div>
    </>
  );
}

export default function Res() {
  return (
    <Suspense fallback={<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p>Loading...</p></div>}>
      <Result />
    </Suspense>
  );
}
