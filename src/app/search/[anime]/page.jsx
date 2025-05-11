"use client";

import { SkeletonSearch } from "@/components/Skeleton";
import Image from "next/image";
import { redirect } from "next/navigation";
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

  const pushToInfo = (animeId) => {
    if (!animeId?.trim()) return;
    redirect(`/info/${animeId}`);
  };

  if (loading) {
    return (
      <div className="mt-20 mr-4 ml-4">
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
          className="flex w-full flex-col items-center justify-center cursor-pointer"
          onClick={() => pushToInfo(anime?.session)}
        >
          <div className="w-full border-2 border-blue-800 rounded-lg p-4 mb-4 flex flex-row gap-4 xs:gap-2 hover:border-blue-500">
            <div>
              <Image
                src={anime?.poster || null}
                alt={anime?.title}
                className="w-full h-full"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-3 xs:gap-2">
              <p className="text-center text-xl md:text-2xl xs:text-base font-bold truncate overflow-hidden xs:w-50 w-60 sm:w-80 md:w-100 lg:w-full">
                {anime?.title}
              </p>
              <div className="flex flex-row items-center justify-between w-full gap-3 xs:gap-2 pl-3 pr-3 pt-2 lg:pl-10 lg:pr-10 lg:pt-5">
                <div className="flex flex-col items-center justify-center gap-1 lg:gap-2">
                  <p className="text-center xs:text-xs sm:text-sm md:text-base">
                    <span className="font-bold">Status: </span>
                    {anime?.status}
                  </p>
                  <p className="text-center xs:text-xs sm:text-sm md:text-base">
                    <span className="font-bold">Type: </span>
                    {anime?.type}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center lg:gap-2">
                  <p className="text-center xs:text-xs sm:text-sm md:text-base">
                    <span className="font-bold">Episodes: </span>
                    {anime?.episodes}
                  </p>
                  <p className="text-center xs:text-xs sm:text-sm md:text-base">
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
