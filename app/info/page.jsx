"use client"

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { get } from '../functions/gogo.js';

function Result() {
  const [data, setData] = useState({});
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
    <h1 className="text-2xl text-center font-bold">{m.title}</h1>
    </div>
    <div className="mt-6"> 
    {loading ? (
        <p>Loading...</p>
      ) : m ? (
    <div>
    <div className="mt-4 flex justify-center items-center w-full">
    <div className="h-24 w-20">
    <img src={m.image} alt="Anime pic" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
    </div>
    </div>
    <div className="w-full">
    <h2 className="text-lg mt-4">Description</h2>
    <br />
    <p className="text-base">{m.description}</p>
    </div>
    </div>
    ) : (<p>No results</p>)}
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