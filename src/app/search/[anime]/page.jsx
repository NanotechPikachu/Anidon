"use client";

import { Card, CardFooter, Skeleton } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function SearchAnime({ params }) {
  const p = use(params);
  const anime = p?.anime;
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (!anime?.trim()) return;
    (async () => {
      const res = await fetch(`/api/search?anime=${encodeURIComponent(anime)}`);
      if (res.status === 404) {
        setAnimeData({ error: "Anime Not Found" });
        setLoading(false);
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
    router.push(`/info/${animeId}`);
  };

  if (loading) {
    return (
      <div className="mt-16 mr-4 ml-4 p-4 grid grid-flow-row auto-rows-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        <Card className="w-full space-y-5 p-6" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-70 md:h-90 w-3/4 rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-full rounded-lg">
              <div className="h-3 w-full rounded-lg bg-default-200" />
            </Skeleton>
          </div>
        </Card>
        <Card className="w-full space-y-5 p-6" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-70 md:h-90 w-3/4 rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-full rounded-lg">
              <div className="h-3 w-full rounded-lg bg-default-200" />
            </Skeleton>
          </div>
        </Card>
        <Card className="w-full space-y-5 p-6" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-70 md:h-90 w-3/4 rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-full rounded-lg">
              <div className="h-3 w-full rounded-lg bg-default-200" />
            </Skeleton>
          </div>
        </Card>
        <Card className="w-full space-y-5 p-6" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-70 md:h-90 w-3/4 rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-full rounded-lg">
              <div className="h-3 w-full rounded-lg bg-default-200" />
            </Skeleton>
          </div>
        </Card>
        <Card className="w-full space-y-5 p-6" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-70 md:h-90 w-3/4 rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-full rounded-lg">
              <div className="h-3 w-full rounded-lg bg-default-200" />
            </Skeleton>
          </div>
        </Card>
        <Card className="w-full space-y-5 p-6" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-70 md:h-90 w-3/4 rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-full rounded-lg">
              <div className="h-3 w-full rounded-lg bg-default-200" />
            </Skeleton>
          </div>
        </Card>
        <Card className="w-full space-y-5 p-6" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-70 md:h-90 w-3/4 rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-full rounded-lg">
              <div className="h-3 w-full rounded-lg bg-default-200" />
            </Skeleton>
          </div>
        </Card>
        <Card className="w-full space-y-5 p-6" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-70 md:h-90 w-3/4 rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-full rounded-lg">
              <div className="h-3 w-full rounded-lg bg-default-200" />
            </Skeleton>
          </div>
        </Card>
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
    <div className="mt-16 mr-4 ml-4 p-4 grid grid-flow-row auto-rows-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
      {animeData?.map((anime) => (
        <Card
          isFooterBlurred
          className="border-none"
          radius="lg"
          key={anime?.id}
          isPressable
          shadow="sm"
          onPress={() => pushToInfo(anime?.session)}
        >
          <Image
            alt={anime?.title}
            height={200}
            width={200}
            src={anime?.poster}
            className="w-full h-90 sm:h-full"
          />
          <CardFooter className="justify-center before:bg-white/10 border-blue-800/20 border-2 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-sm text-white/80 hover:text-blue-600/70">
              {anime?.title}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
