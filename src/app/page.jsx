"use client";

import { FrontPageSkeleton } from "@/components/Skeletons";
import { Card, CardFooter, Progress } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    (async () => {
      setLoading(true);
      for (let i = 0; i < 5; i++) {
        const res = await fetch("/api/random").then((res) => res.json());
        if (isMounted && res?.randomAnimeData) {
          setData((prev) => [...prev, res?.randomAnimeData].flat());
        }
      }
      if (isMounted) setLoading(false);
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const pushToInfo = (animeId) => {
    if (!animeId?.trim()) return;
    router.push(`/info/${animeId}`);
  };

  if (loading && data?.length === 0) {
    return <FrontPageSkeleton />;
  }

  return (
    <div className="mt-10 mx-4 mb-10">
      <div>
        <h2
          className={`text-xl font-bold text-blue-500/70 text-center lg:text-2xl ${data?.length === 10 ? "mb-8" : "mb-2"}`}
        >
          PICKS FOR YOU
        </h2>
        <div className={`mb-6 ${data?.length === 10 ? "hidden" : ""}`}>
          <Progress
            aria-label="Loading"
            size="sm"
            radius="full"
            value={data?.length}
            maxValue={10}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 lg:gap-6 justify-center">
        {data?.map((anime) => (
          <Card
            isFooterBlurred
            className="border-none"
            key={anime?.id}
            isPressable
            shadow="sm"
            radius="lg"
            onPress={() => pushToInfo(anime?.id)}
          >
            <Image
              alt={anime?.title}
              src={anime?.cover}
              width={200}
              height={200}
              className="w-50 h-80"
            />
            <CardFooter className="justify-center before:bg-white/10 border-blue-800/20 border-2 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-sm text-white/80 hover:text-blue-600/70">
                {anime?.title}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
