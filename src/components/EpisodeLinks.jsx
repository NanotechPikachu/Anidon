import { ModalBody, ModalHeader } from "@heroui/react";
import { useEffect, useState } from "react";
import { NextSvg } from "./Svg";

export default function EpisodeLinks({ animeId, episodeId }) {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(null);
  const [links, setLinks] = useState(null);

  useEffect(() => {
    setPage("dwld");
  }, []);

  useEffect(() => {
    setLoading(true);
    if (page === "dwld") {
      (async () => {
        const res = await fetch(
          `/api/dwld?animeId=${animeId}&episodeId=${episodeId}`,
        );
        if (res.status === 404) {
          setLinks({ error: "Episode Links Not Found" });
          setLoading(false);
          return;
        } else {
          const data = await res?.json();
          setLinks(data?.downloadLinks);
          setLoading(false);
        }
      })();
    }
  }, [page]);

  if (loading) {
    return (
      <>
        <ModalHeader className="flex">Download and Stream Links</ModalHeader>
        <ModalBody>
          <p>Loading...</p>
        </ModalBody>
      </>
    );
  }

  if (links?.error) {
    return (
      <>
        <ModalHeader className="flex">Download and Stream Links</ModalHeader>
        <ModalBody>
          <p className="text-center text-2xl font-bold">{links?.error}</p>
        </ModalBody>
      </>
    );
  }

  return (
    <>
      {loading ? (
        <>
          <ModalHeader className="flex">Download and Stream Links</ModalHeader>
          <ModalBody>
            <p>Loading...</p>
          </ModalBody>
        </>
      ) : (
        <>
          <ModalHeader className="flex">Download and Stream Links</ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-2">
              {links?.map((link) => (
                <a
                  href={link?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link?.quality}
                >
                  <div className="flex w-full h-auto border-2 border-blue-700 rounded-lg p-2 flex-row text-blue-500/60 justify-between items-center">
                    <p className="hover:underline">{link?.quality}</p>
                    <NextSvg />
                  </div>
                </a>
              ))}
            </div>
          </ModalBody>
        </>
      )}
    </>
  );
}
