import { Suspense } from "react";
import dynamic from "next/dynamic";
import { trending, popular, latestRelease } from "../functions/anilist.js";
import { Refresh } from "../functions/Refresh.jsx";
import NavBar from "@/app/components/NavBar.jsx";
const Search = dynamic(() => import("../components/Search.jsx"), {
  ssr: false,
});
import VideoPlayer from "@/app/components/VideoPlayer.jsx";


async function More() {
  const data = await trending();
  const dat = await popular();
  const da = await latestRelease();

  if (data?.length <= 0 || dat?.length <= 0 || da?.length <= 0) {
    return (
      <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center">
        <p className="text-orange-500 dark:text-orange-400 text-lg md:text-xl">
          Something went wrong when fetching the information!
        </p>
      </div>
    );
  }

  const m = data;
  const n = dat;
  const o = da;

  return (
    <>
      <Search />
      <div className="ml-6 mr-6 mt-6 mb-20">
        <>
          <NavBar />
          <div className="mt-16 md:mt-24">
            <div className="w-full flex md:h-16 h-12 justify-center items-center">
              <p className="text-3xl bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500 bg-clip-text text-transparent font-bold">
                TRENDING ANIME
              </p>
            </div>
            <div className="hover:small-scroll mt-6 mb-4 grid grid-flow-col auto-cols-max max-w-screen grid-rows-1 gap-3 md:gap-6 overflow-x-auto h-72">
              {m.map((x, index) => (
                <div
                  className="overflow-hidden flex flex-col flex-shrink-0 cursor-pointer sm:w-44 h-72 w-36 hide-scroll relative rounded-md"
                  key={x?.title?.userPreferred}
                >
                  <div className="absolute z-10 left-0 top-0 text-white font-bold bg-black bg-opacity-45 backdrop-blur-3xl text-xs rounded-br-lg px-2 py-1 shadow-2xl">
                    {x?.genres ? x?.genres[0] : "Unknown"}
                  </div>
                  <div className="relative sm:w-44 sm:h-56 h-48 w-36">
                    <img
                      src={x?.coverImage?.large}
                      alt="Anime pic"
                      className="w-full h-full object-over opacity-90"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black z-10"></div>
                  </div>
                  <p className="p-1 text-xs md:text-sm text-white text-center overflow-hidden truncate">
                    {x?.title?.userPreferred}
                  </p>
                  <p className="p-1 text-xs md:text-sm text-white opacity-85 text-center overflow-hidden">
                    {x?.startDate?.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 w-full flex md:h-16 h-12 justify-center items-center">
            <p className="text-3xl bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500 bg-clip-text text-transparent font-bold">
              POPULAR ANIME
            </p>
          </div>
          <div className="hover:small-scroll mt-6 mb-4 grid grid-flow-col auto-cols-max max-w-screen grid-rows-1 gap-3 md:gap-6 overflow-x-auto h-72">
            {n.map((x, index) => (
              <div
                className="overflow-hidden flex flex-col flex-shrink-0 cursor-pointer sm:w-44 h-72 w-36 hide-scroll relative rounded-md"
                key={x?.title?.userPreferred}
              >
                <div className="absolute z-10 left-0 top-0 text-white font-bold bg-black bg-opacity-45 backdrop-blur-3xl text-xs rounded-br-lg px-2 py-1 shadow-2xl">
                  {x?.genres ? x?.genres[0] : "Unknown"}
                </div>
                <div className="relative sm:w-44 sm:h-56 h-48 w-36">
                  <img
                    src={x?.coverImage?.large}
                    alt="Anime pic"
                    className="w-full h-full object-over opacity-90"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black z-10"></div>
                </div>
                <p className="p-1 text-xs md:text-sm text-white text-center overflow-hidden truncate">
                  {x?.title?.userPreferred}
                </p>
                <p className="p-1 text-xs md:text-sm text-white opacity-85 text-center overflow-hidden">
                  {x?.startDate?.year}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 w-full flex md:h-16 h-12 justify-center items-center">
            <p className="text-3xl bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500 bg-clip-text text-transparent font-bold">
              LATEST RELEASE
            </p>
          </div>
          <div className="hover:small-scroll mt-6 mb-4 grid grid-flow-col auto-cols-max max-w-screen grid-rows-1 gap-3 md:gap-6 overflow-x-auto h-72">
            {o.map((x, index) => (
              <div
                className="overflow-hidden flex flex-col flex-shrink-0 cursor-pointer sm:w-44 h-72 w-36 hide-scroll relative rounded-md"
                key={x?.media?.title?.userPreferred}
              >
                <div className="absolute z-10 left-0 top-0 text-white font-bold bg-black bg-opacity-45 backdrop-blur-3xl text-xs rounded-br-lg px-2 py-1 shadow-2xl">
                  {`EP: ${x?.episode}`}
                </div>
                <div className="relative sm:w-44 sm:h-56 h-48 w-36">
                  <img
                    src={x?.media?.coverImage?.large}
                    alt="Anime pic"
                    className="w-full h-full object-over opacity-90"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black z-10"></div>
                </div>
                <p className="p-1 text-xs md:text-sm text-white text-center overflow-hidden truncate">
                  {x?.media?.title?.userPreferred}
                </p>
                <p className="p-1 text-xs md:text-sm text-white opacity-85 text-center overflow-hidden">
                  {x?.media?.startDate?.year}
                </p>
              </div>
            ))}
          </div>
        </>
      </div>
      <Refresh />
{/*
<video width={200} height={200} controls>
<source src="https://www041.anzeat.pro/streamhls/f643f0c19d5bee9f1c3aed888eee75d6/ep.9.1709256905.360.m3u8" type="application/vnd.apple.mpegurl" />
</video>
*/}
<VideoPlayer src="https://www041.anzeat.pro/streamhls/f643f0c19d5bee9f1c3aed888eee75d6/ep.9.1709256905.360.m3u8" />
    </>
  );
}

export default function Mre() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center">
          <p className="text-violet-600 text-lg md:text-xl animate-bounce">
            Loading...
          </p>
        </div>
      }
    >
      <More />
    </Suspense>
  );
}
