"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { search } from "../functions/gogo.js";
import NavBar from "@/app/components/NavBar.jsx";

function Result() {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(true);
  const params = useSearchParams();
  const anime = params.get("anime");
  const router = useRouter();

  function changePage(id) {
    router.push(`info?id=${encodeURIComponent(id)}`);
  }

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
        <NavBar />
        <div className="mt-20 md:mt-24">
          <h1 className="md:text-3xl text-2xl text-center font-bold text-white">
            Search results...
          </h1>
          <p className="text-center font-mono text-sm md:text-base text-slate-50">
            <i>Query: {anime}</i>
          </p>
        </div>
        <div className="mt-6 grid grid-flow-row grid-cols-2 md:grid-cols-8 overflow-hidden gap-x-2 gap-y-4 justify-center justify-items-center items-center">
          {loading ? (
            <p className="text-violet-600 text-lg md:text-xl animate-bounce">
              Loading...
            </p>
          ) : m.length > 0 ? (
            m?.map((x, index) => (
              <div
                key={index}
                className="overflow-hidden flex flex-col flex-shrink-0 cursor-pointer w-44 h-64 hide-scroll relative rounded-md"
                onClick={() => changePage(x.id)}
              >
                <div className="absolute z-10 left-0 top-0 text-white font-bold bg-black bg-opacity-45 backdrop-blur-3xl text-xs rounded-br-lg px-2 py-1 shadow-2xl">
                  {x.subOrDub}
                </div>
                <div className="relative w-44 h-56">
                  <img
                    src={x.image}
                    alt="Anime pic"
                    className="w-full h-full opacity-90 object-cover"
                  ></img>
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black z-10"></div>
                </div>
                <p className="p-1 text-xs md:text-sm text-white text-center overflow-hidden truncate">
                  {x.title}
                </p>
              </div>
            ))
          ) : (
            <p className="text-orange-500 dark:text-orange-400 text-lg md:text-xl">
              No results
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default function Res() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center">
          <p className="text-violet-600 text-lg md:text-xl animate-bounce">
            Loading...
          </p>
        </div>
      }
    >
      <Result />
    </Suspense>
  );
}
