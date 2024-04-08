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
    <div className="ml-6 mr-6 mt-6">
    {loading ? (
        <p>Loading...</p>
      ) : m ? (
    <div>
    <div className="mt-20">
    <h1 className="text-2xl text-center font-bold">{`${m.title?.replace('(Dub)', '')} (${m.subOrDub})`}</h1>
    </div>
    <div className="mt-4 flex justify-center items-center w-full">
    <div className="h-48 w-44">
    <img src={m.image} alt="Anime pic" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
    </div>
    </div>
    <br /><br /><br />
    <div className="w-full">
    <h2 className="text-lg underline font-bold">Description</h2>
    <p className="text-sm">{m.description || 'No information'}</p>
    <h2 className="text-lg mt-10 underline font-bold">Genres</h2>
    <p className="text-sm">{m.genres?.join(", ") || 'No information'}</p>
    <h2 className="text-lg mt-10 underline font-bold">Release</h2>
    <p className="text-sm">{m.releaseDate || 'No information'}</p>
    </div>
    </div>
    ) : (<p>No results</p>)}
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