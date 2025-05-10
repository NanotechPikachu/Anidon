"use client";

import { SkeletonSearch } from "@/components/Skeleton";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function SearchAnime({ params }) {
  const p = use(params);
  const anime = p?.anime;
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!anime?.trim()) return;
    (async () => {
      const res = await fetch(`/api/search?anime=${encodeURIComponent(anime)}`);
      if (res.status === 404) {
        setAnimeData({ error: "Anime Not Found" });
        return;
      } else {
        const data = await res?.json();
        setAnimeData(data?.dataSheet?.data);
        setLoading(false);
      }
    })();
  }, []);

  /* if (loading) {
    return (
        <div className="mt-40 mr-4 ml-4 flex items-center justify-center h-full">
        <p className="text-center text-2xl font-bold">Loading</p>
      </div>
    )
  }*/

  if (loading) {
    return (
      <div className="mt-40 mr-4 ml-4">
        <SkeletonSearch />
        <SkeletonSearch />
        <SkeletonSearch />
        <SkeletonSearch />
      </div>
    );
  }

  if (animeData?.error) {
    return (
      <div className="mt-40 mr-4 ml-4 flex items-center justify-center h-full">
        <p className="text-center text-2xl font-bold">{animeData?.error}</p>
      </div>
    );
  }

  return (
    <div className="mt-20 mr-4 ml-4">
      {animeData?.map((anime) => (
        <div
          key={anime?.id}
          className="flex w-full flex-col items-center justify-center"
        >
          <div className="w-full border-2 border-blue-800 rounded-lg p-4 mb-4 flex flex-row gap-4 hover:border-blue-500">
            <div>
              <Image
                src={anime?.poster}
                alt={anime?.title}
                className="w-full h-full"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-3">
              <p className="text-center text-xl font-bold truncate overflow-hidden w-60 lg:w-full">
                {anime?.title}
              </p>
              <div className="flex flex-row items-center justify-between w-full gap-3 pl-3 pr-3 pt-2 lg:pl-10 lg:pr-10 lg:pt-5">
                <div className="flex flex-col items-center justify-center lg:gap-2">
                  <p className="text-center text-sm lg:text-base">
                    <span className="font-bold">Status: </span>
                    {anime?.status}
                  </p>
                  <p className="text-center text-sm lg:text-base">
                    <span className="font-bold">Type: </span>
                    {anime?.type}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center lg:gap-2">
                  <p className="text-center text-sm lg:text-base">
                    <span className="font-bold">Episodes: </span>
                    {anime?.episodes}
                  </p>
                  <p className="text-center text-sm lg:text-base">
                    <span className="font-bold">Score: </span>
                    {anime?.score}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
