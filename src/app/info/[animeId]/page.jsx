"use client";

import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function Info({ params }) {
  const p = use(params);
  const animeId = p?.animeId;
  const [animeInfo, setAnimeInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!animeId?.trim()) return;
    (async () => {
      const res = await fetch(
        `/api/info?animeId=${encodeURIComponent(animeId)}`,
      );
      if (res.status === 404) {
        setAnimeInfo({ error: "Anime Not Found" });
        return;
      } else {
        const data = await res?.json();
        setAnimeInfo(data);
        setLoading(false);
      }
    })();
  }, []);

  if (animeInfo?.error) {
    return (
      <div className="mt-40 mr-4 ml-4 flex items-center justify-center h-full">
        <p className="text-center text-2xl font-bold">{animeInfo?.error}</p>
      </div>
    );
  }

  return (
  <div className="mt-20 mr-4 ml-4">
    <div className="flex w-full flex-row items-center justify-between h-80">
        <div className="w-1/4 h-60">
    <Image src={animeInfo?.cover || null} alt={animeInfo?.title} className="w-full h-full" width={100} height={100} />
    </div>
    <div className="flex flex-col justify-center text-left gap-3 mr-5 ml-20">
        <p className="text-left text-2xl font-bold truncate w-4/7 lg:w-4/5 overflow-hidden">{animeInfo?.title}</p>
        <p className="text-left text-sm lg:text-base">{animeInfo?.info?.studio?.join(", ") || "N/A"}</p>
        </div>
    </div>
    </div>
)
}
