"use client";

import Episodes from "@/components/Episodes";
import { InfoSkeleton } from "@/components/Skeletons";
import { Card, CardBody, CardFooter, Chip, Divider } from "@heroui/react";
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
        setLoading(false);
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

  if (loading) {
    return <InfoSkeleton />;
  }

  return (
    <div className="mt-10 mr-4 ml-4">
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="flex justify-center md:justify-between items-center">
          <Card
            isFooterBlurred
            shadow="none"
            radius="lg"
            className="w-40 sm:w-45 sm:h-70 md:w-50 md:h-75 lg:w-60 lg:h-85 h-60 bg-transparent"
          >
            <CardBody>
              <Image
                src={animeInfo?.cover}
                height={200}
                width={100}
                alt={animeInfo?.title}
                className="w-full h-full"
              />
            </CardBody>
            <CardFooter className="justify-between before:bg-white/10 border-white/20 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-3 w-auto shadow-small mx-3 z-10">
              <p className="text-base hover:text-blue-700 font-bold">
                {animeInfo?.info?.type}
              </p>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full mt-7">
          <div className="flex flex-row gap-2 justify-center md:justify-start items-center">
            <p className="text-lg md:text-xl md:text-left text-center lg:text-2xl md:max-w-1/2 lg:max-w-full">
              {animeInfo?.title}
            </p>
            <div className="mt-0.5">
              <Chip color="warning" variant="bordered" className="ml-2 mt-0">
                {animeInfo?.info.status}
              </Chip>
            </div>
          </div>
          <p className="text-base md:text-lg md:text-left text-center lg:text-xl mt-2 text-white/60">
            {animeInfo?.info?.studio?.join(", ")}
          </p>
          <p className="text-base md:text-lg text-left lg:text-xl mt-3 text-white/80">
            <span className="font-bold text-blue-700/70">Genres: </span>
            {animeInfo?.info?.genres?.join(", ")}
          </p>
          <p className="text-base md:text-lg text-left lg:text-xl mt-3 text-white/80">
            <span className="font-bold text-blue-700/70">Release: </span>
            {animeInfo?.info?.releaseDate}
          </p>
          <p className="text-base md:text-lg text-left lg:text-xl mt-3 text-white/80">
            <span className="font-bold text-blue-700/70">Episodes: </span>
            {animeInfo?.info?.episodes}
          </p>
        </div>
      </div>
      <Divider className="my-6" />
      <div className="md:ml-3">
        <h2 className="text-lg md:text-xl font-bold text-blue-700/70 text-left lg:text-2xl">
          Synopsis
        </h2>
        <p className="text-justify text-base md:text-lg mt-3 text-white/80">
          {animeInfo?.synopsis}
        </p>
      </div>
      <div>
        <Divider className="my-6" />
        <h2 className="text-lg md:text-xl font-bold text-blue-700/70 text-left lg:text-2xl">
          Episodes
        </h2>
        <Episodes animeId={animeId} />
      </div>
    </div>
  );
}
