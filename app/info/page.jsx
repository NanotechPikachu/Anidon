"use client"

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { get } from '../functions/gogo.js';

function Anime() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useSearchParams();
  const id = params.get('id');

  useEffect(() => {
    if (id) {
      get(id).then((ans) => {
        console.log(ans);
        setData(ans);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);
 // console.log(!data.title);
  const m = data;
  const l = [];
  const a = m.episodes?.map((i) => (l.push(i.number)));
console.log(a)
  return (
    <>
    <div className="ml-6 mr-6 mt-6 mb-20">
    {loading ? (
        <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p>Loading...</p></div>
      ) : m.title ? (
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
    <h2 className="text-lg mt-8 underline font-bold">Status</h2>
    <p className="text-sm">{m.status || 'No information'}</p>
    <h2 className="text-lg mt-8 underline font-bold">Genres</h2>
    <p className="text-sm">{m.genres?.join(", ") || 'No information'}</p>
    <h2 className="text-lg mt-8 underline font-bold">Release</h2>
    <p className="text-sm">{m.releaseDate || 'No information'}</p>
    <h2 className="text-lg mt-8 underline font-bold">Other Name(s)</h2>
    <p className="text-sm">{m.otherName || 'No information'}</p>
    <h2 className="text-lg mt-8 underline font-bold">{`Episode(s) (${m.totalEpisodes})`}</h2>
    <p className="text-sm">{a || 'No information'}</p>
    </div>
    </div>
    ) : (<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p>No results Found!</p></div>)}
    </div>
    </>
  );
}

export default function Info() {
  return (
    <Suspense fallback={<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p>Loading...</p></div>}>
      <Anime />
    </Suspense>
  );
}