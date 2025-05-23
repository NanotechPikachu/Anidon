"use client";

import {
  Card,
  CardFooter,
  Modal,
  ModalContent,
  Pagination,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { EpisodesSkeleton } from "./Skeletons";
import EpisodeLinks from "./EpisodeLinks";
import { NextSvg } from "./Svg";

export default function Episodes({ animeId }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [episodeData, setEpisodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    (async () => {
      if (currentPage === 0) return;
      setLoading(true);
      const res = await fetch(
        `/api/episodes?animeId=${animeId}&page=${currentPage}`,
      );
      if (res.status === 404) {
        setEpisodeData({ error: "Anime Not Found" });
        setLoading(false);
        return;
      } else {
        const data = await res?.json();
        setEpisodeData(data?.episodeData);
        setLoading(false);
      }
    })();
  }, [currentPage]);

  if (loading) {
    return <EpisodesSkeleton />;
  }

  if (episodeData?.error) {
    return (
      <div className="mt-10 mr-4 ml-4 flex items-center justify-center h-full">
        <p className="text-center text-2xl font-bold">{episodeData?.error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center">
        <Pagination
          isCompact
          showControls
          color="primary"
          initialPage={1}
          total={episodeData?.last_page}
          page={currentPage}
          onChange={setCurrentPage}
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {episodeData?.data?.map((ep) => (
          <div key={ep?.id}>
            <Card shadow="lg" isPressable onPress={onOpen}>
              <Image
                alt={ep?.episode}
                height={200}
                width={200}
                src={ep?.snapshot}
                className="w-70 h-40"
              />
              <CardFooter className="justify-between items-center">
                <p className="text-white/80 text-base">
                  Episode: {ep?.episode}
                </p>
                <NextSvg />
              </CardFooter>
            </Card>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
              <ModalContent>
                {(onClose) => (
                  <>
                    <EpisodeLinks animeId={animeId} episodeId={ep?.session} />
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
}
