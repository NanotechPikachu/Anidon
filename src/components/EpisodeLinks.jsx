import { Alert, Button, Link, ModalBody, ModalHeader } from "@heroui/react";
import { useEffect, useState } from "react";
import { NextSvg } from "./Svg";

function DataCard({ link, type }) {
  if (type === "dwld") {
    return (
      <Button
        showAnchorIcon
        as={Link}
        target="_blank"
        href={link?.url}
        color="success"
        variant="bordered"
        fullWidth
      >
        {link?.quality}
      </Button>
    );
  } else {
    return (
      <Button
        showAnchorIcon
        as={Link}
        target="_blank"
        href={link?.link}
        color="success"
        variant="bordered"
        fullWidth
      >
        {link?.quality}
      </Button>
    );
  }
}

function AlertBox({ type }) {
  if (type === "dwld") {
    const desc =
      "The below links are DSL (Direct Server Links) which redirect you to the webpage where you can stream and download anime. I am in no way responsible for any ads coming on that page as it ain't owned/operated by me.";
    return (
      <Alert
        color="warning"
        hideIconWrapper
        title="Stream and Download"
        description={desc}
        className="mb-2"
      />
    );
  } else {
    const desc =
      "The links are direct to the M3U8 files and as such, won't work on PC as it will be considered for dowloading. If you're on PC, copy the link and paste on VLC to play without ads. On Android, you can click it and the browser will play directly so, there's no need for any external app here.";
    return (
      <Alert
        color="warning"
        hideIconWrapper
        title="Stream only"
        description={desc}
        className="mb-2"
      />
    );
  }
}

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
    } else {
      (async () => {
        const res = await fetch(
          `/api/stream?animeId=${animeId}&episodeId=${episodeId}`,
        );
        if (res.status === 404) {
          setLinks({ error: "Episode Links Not Found" });
          setLoading(false);
          return;
        } else {
          const data = await res?.json();
          setLinks(data?.sources);
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
              <div className="flex flex-row mb-5 gap-2">
                <Button
                  color="danger"
                  variant="ghost"
                  isDisabled={page === "stream"}
                  onPress={() => setPage("stream")}
                >
                  Stream
                </Button>
                <Button
                  color="danger"
                  variant="ghost"
                  isDisabled={page === "dwld"}
                  onPress={() => setPage("dwld")}
                >
                  DSL
                </Button>
              </div>
              <AlertBox type={page} />
              {links?.map((link) => (
                <div key={link?.quality}>
                  <DataCard link={link} type={page} />
                </div>
              ))}
            </div>
          </ModalBody>
        </>
      )}
    </>
  );
}
