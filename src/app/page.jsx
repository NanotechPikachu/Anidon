"use client";

import { FrontPageSkeleton } from "@/components/Skeletons";
import { Card, CardFooter } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/random").then((res) => res.json());
      setData(res?.randomAnimeData || []);
      setLoading(false);
    })();
  }, []);

  const pushToInfo = (animeId) => {
    if (!animeId?.trim()) return;
    router.push(`/info/${animeId}`);
  };

  if (loading) {
    return <FrontPageSkeleton />;
  }

  return (
    <div className="mt-10 mx-4">
      <div>
        <h2 className="text-lg md:text-xl font-bold text-blue-700/70 text-center lg:text-2xl mb-8 hover:underline">
          PICKS FOR YOU
        </h2>
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
