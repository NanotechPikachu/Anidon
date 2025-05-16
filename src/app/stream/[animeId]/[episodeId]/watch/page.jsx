"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { useSearchParams } from "next/navigation";
import { use, useEffect, useState } from "react";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

export default function Stream({ params }) {
  const p = use(params);
  const animeId = p?.animeId;
  const episodeId = p?.episodeId;

  const sp = useSearchParams();
  const poster = sp?.get("poster");

  const [loading, setLoading] = useState(true);
  const [streamLinks, setStreamLinks] = useState(null);
  const [currentStream, setCurrentStream] = useState("hi");

  useEffect(() => {
    if (!animeId || !episodeId) return;
    (async () => {
      const res = await fetch(
        `/api/stream?animeId=${animeId}&episodeId=${episodeId}`,
      );

      if (res?.status === 404) {
        setStreamLinks({ error: "No stream links found!" });
        return;
      } else {
        const data = await res?.json();
        setStreamLinks(data);
        setLoading(false);
      }
    })();
  }, []);

  const selection = (item) => {
    setCurrentStream(item);
  };

  if (streamLinks?.error) {
    return (
      <div className="mt-40 mr-4 ml-4 flex items-center justify-center h-full">
        <p className="text-center text-2xl font-bold">{animeInfo?.error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="mt-40 mr-4 ml-4 flex items-center justify-center h-full">
        <p className="text-center text-2xl font-bold">Loading</p>
      </div>
    );
  }

  return (
    <div className="mt-30 mx-4 flex items-center justify-center h-full">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Open</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Dropdown menu with description"
          variant="faded"
          onAction={selection}
        >
          {streamLinks?.sources?.map((link) => (
            <DropdownItem
              key={link?.link}
              description={`Language: ${link?.audio}`}
            >
              {link?.quality}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <MediaPlayer title="Anime" src={currentStream}>
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
}
