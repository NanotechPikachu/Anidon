"use client"

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { get } from '../functions/gogo.js';
import NavBar from "@/app/components/NavBar.jsx";

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
        <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-lg md:text-xl text-violet-600 animate-bounce">Loading...</p></div>
      ) : m.title ? (
    <div>
    <NavBar />
    <div className="mt-20 md:mt-24">
    <h1 className="text-2xl text-center md:text-3xl font-bold text-violet-900 hover:text-violet-400">{`${m.title?.replace('(Dub)', '')} (${m.subOrDub})`}</h1>
    </div>
    <div className="mt-4 flex justify-center items-center w-full bg-cover h-[144px] md:h-[224] bg-no-repeat bg-center" style={{ backgroundImage: `url('${m.image}')`, height: "100%", width: "100%" }}>
    <div className="h-full w-full backdrop-blur-sm">
    <div className="h-36 w-24 md:h-56 md:w-36">
    <img src={m.image} alt="Anime pic" className="h-full w-full object-contain" style={{ float: 'left' }}></img>
    </div>
    </div>
    </div>
    <br /> <br /> <br />
    <div className="w-full">
    <h2 className="text-lg md:text-xl underline font-bold text-white">Description</h2>
    <p className="text-sm md:text-base text-slate-50">{m.description || 'No information'}</p>
    <h2 className="text-lg md:text-xl mt-8 underline font-bold text-white">Status</h2>
    <p className="text-sm md:text-base text-slate-50">{m.status || 'No information'}</p>
    <h2 className="text-lg md:text-xl mt-8 underline font-bold text-white">Genres</h2>
    <p className="text-sm md:text-base text-slate-50">{m.genres?.join(", ") || 'No information'}</p>
    <h2 className="text-lg md:text-xl mt-8 underline font-bold text-white">Release</h2>
    <p className="text-sm md:text-base text-slate-50">{m.releaseDate || 'No information'}</p>
    <h2 className="text-lg md:text-xl mt-8 underline font-bold text-white">Other Name(s)</h2>
    <p className="text-sm md:text-base text-slate-50">{m.otherName || 'No information'}</p>
    <h2 className="text-lg md:text-xl mt-8 underline font-bold text-white">{`Episode(s) (${m.totalEpisodes})`}</h2>
    <div className="mt-2 flex flex-col md:grid md:grid-flow-row md:grid-cols-3 overflow-hidden md:gap-4">
  {l?.map((x, index) => (
    <div key={index} onClick={() => changePage(n[index], m.title, index + 1)}
      className="group border-2 border-violet-700 relative bg-black text-white hover:text-black transition duration-500 ease-in-out overflow-hidden">
    <div className="absolute inset-0 bg-violet-500 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0 -translate-x-full"></div>
    <p className="relative p-2 cursor-pointer text-slate-50 transition-colors duration-500 ease-in-out group-hover:text-black">Episode: {x}</p>
    </div> 
  )) || 'No information'}
    </div></div></div>
    ) : (<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-orange-500 dark:text-orange-400 text-lg md:text-xl">No results Found!</p></div>)}
    </div>
    </>
  );
}

export default function Info() {
  return (
    <Suspense fallback={<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-lg md:text-xl text-violet-600 animate-bounce">Loading...</p></div>}>
      <Anime />
    </Suspense>
  );
}
