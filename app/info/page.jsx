"use client"

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { get } from '../functions/gogo.js';

function Result() {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  const params = useSearchParams();
  const id = params.get('id');

  useEffect(() => {
    if (id) {
      setLoading(true);
      get(id).then((ans) => {
        console.log(ans);
        setData(ans);
        setLoading(false);
      });
    }
  }, [id]);

  const m = data;
  return (
    <>
    <div className="ml-6 mr-6">
    <div className="mt-20">
    <h1 className="text-2xl text-center font-bold">Search results...</h1>
    <p className="text-center font-mono text-sm"><i>Query: {anime}</i></p>
    </div>
{m}
{/*
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
*/}
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