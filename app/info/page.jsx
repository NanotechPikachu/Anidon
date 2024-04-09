"use client"

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { get } from '../functions/gogo.js';
import Image from 'next/image';

function Anime() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useSearchParams();
  const id = params.get('id');

  const router = useRouter();

  function changePage(link, anime, episode) {
    router.push(`dwld?link=${encodeURIComponent(link)}&anime=${encodeURIComponent(anime)}&episode=${encodeURIComponent(episode)}`);
  };

  useEffect(() => {
    if (id) {
      get(id).then((ans) => {
        setData(ans);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);
 
  const m = data;
  const l = [];
  const n = [];
  const a = m.episodes?.map((i) => (l.push(i.number)));
  const b = m.episodes?.map((i) => (n.push(i.id)));
  
  return (
    <>
    <div className="ml-6 mr-6 mt-6 mb-20">
    {loading ? (
        <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-lg md:text-xl text-violet-600">Loading...</p></div>
      ) : m.title ? (
    <div>
    <div className="mt-20">
    <h1 className="text-2xl text-center font-bold text-white">{`${m.title?.replace('(Dub)', '')} (${m.subOrDub})`}</h1>
    </div>
    <div className="mt-4 flex justify-center items-center w-full bg-cover h-[252px] bg-no-repeat bg-center" style={{ backgroundImage: `url('${m.image}')`, height: "100%", width: "100%" }}>
    <div className="h-full w-full backdrop-blur-sm">
    <div className="h-48 w-44">
    <Suspense fallback={<div className="flex h-full w-full items-center justify-center text-center"><p className="text-violet-600 text-lg md:text-xl">Loading Image...</p></div>}>
    <Image src={m.image} alt="Anime pic" width={224} height={250} objectFit="contain" style={{ float: 'left' }} />
    </Suspense>
    </div>
    </div>
    </div>
    <br /> <br /> <br />
    <div className="w-full">
    <h2 className="text-lg underline font-bold text-white">Description</h2>
    <p className="text-sm text-slate-50">{m.description || 'No information'}</p>
    <h2 className="text-lg mt-8 underline font-bold text-white">Status</h2>
    <p className="text-sm text-slate-50">{m.status || 'No information'}</p>
    <h2 className="text-lg mt-8 underline font-bold text-white">Genres</h2>
    <p className="text-sm text-slate-50">{m.genres?.join(", ") || 'No information'}</p>
    <h2 className="text-lg mt-8 underline font-bold text-white">Release</h2>
    <p className="text-sm text-slate-50">{m.releaseDate || 'No information'}</p>
    <h2 className="text-lg mt-8 underline font-bold text-white">Other Name(s)</h2>
    <p className="text-sm text-slate-50">{m.otherName || 'No information'}</p>
    <h2 className="text-lg mt-8 underline font-bold text-white">{`Episode(s) (${m.totalEpisodes})`}</h2>
    <div className="mt-2 flex flex-col md:grid md:grid-flow-row md:grid-cols-3 overflow-hidden md:gap-4"> {l?.map((x, index) => (<div key={index} onClick={() => changePage(n[index], m.title, index + 1)}><p className="border-2 border-violet-700 p-2 cursor-pointer text-slate-50">Episode: {x} </p></div>)) || 'No information'}</div>
    </div>
    </div>
    ) : (<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-orange-500 dark:text-orange-400 text-lg md:text-xl">No results Found!</p></div>)}
    </div>
    </>
  );
}

export default function Info() {
  return (
    <Suspense fallback={<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-lg md:text-xl text-violet-600">Loading...</p></div>}>
      <Anime />
    </Suspense>
  );
}
