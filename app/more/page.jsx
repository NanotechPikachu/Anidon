import { Suspense } from "react";
import { trending, popular, latestRelease } from "../functions/anilist.js";
import TRENDINGANIME from "@/app/assets/TRENDINGANIME.png";
import POPULARANIME2 from "@/app/assets/POPULARANIME2.png";
import NavBar from "@/app/components/NavBar.jsx";

async function More() {
  const data = await trending();
  const dat = await popular();
  const da = await latestRelease();

  if ((data?.length <= 0 || dat?.length <= 0) || (da?.length <= 0)) {
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
      <div className="min-w-full min-h-screen flex justify-center p-16">
      <form
        className="mx-[10px] mt-[80px] flex flex-row gap-x-6 h-auto max-h-14 z-10"
        onSubmit={handleSubmit}
      >
        <input
          className="w-fit sm:w-auto md:w-[450px] px-2 sm:px-4 py-2 sm:py-3 rounded-lg outline-none text-sm"
          type="text"
          value={""/*searchTerm*/}
          onChange={console.log("hi")/*(e) => setSearchTerm(e.target.value)*/}
          placeholder="Search for an anime.."
        />
        <button
          className="text-sm sm:text-base w-fit sm:w-[120px] rounded-lg bg-violet-500 text-white flex flex-row px-2 sm:px-4 py-2 sm:py-3 items-center"
          type="submit"
        >
          Search{" "}
          <FaAngleRight className="ml-3 sm:ml-6" size="20px" color="#FFFFFF" />
        </button>
      </form>
      </div>
      <div className="ml-6 mr-6 mt-6 mb-20">
        {m ? (
          <>
            <NavBar />
            <div className="mt-20 md:mt-24">
              <div className="w-full flex md:h-16 h-12 justify-center items-center">
                <p className="text-3xl bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500 bg-clip-text text-transparent font-bold">
                  TRENDING ANIME
                </p>
              </div>
              <div className="hover:small-scroll mt-6 mb-4 grid grid-flow-col auto-cols-max max-w-screen grid-rows-1 gap-3 md:gap-6 overflow-x-auto h-36 md:h-56">
                {m.map((x, index) => (
                  <div
                    className="relative w-24 md:w-36 h-full flex items-stretch"
                    key={x?.title?.userPreferred}
                  >
                    <img
                      src={x?.coverImage?.large}
                      alt="Anime pic"
                      className="w-full h-full object-over opacity-75 border-2 border-violet-500"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 w-full flex md:h-16 h-12 justify-center items-center">
              <p className="text-3xl bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500 bg-clip-text text-transparent font-bold">
                POPULAR ANIME
              </p>
            </div>
            <div className="hover:small-scroll mt-6 mb-4 grid grid-flow-col auto-cols-max max-w-screen grid-rows-1 gap-3 md:gap-6 overflow-x-auto h-36 md:h-56">
              {n.map((x, index) => (
                <div
                  className="relative w-24 md:w-36 h-full flex items-stretch"
                  key={x?.title?.userPreferred}
                >
                  <img
                    src={x?.coverImage?.large}
                    alt="Anime pic"
                    className="w-full h-full object-over opacity-75 border-2 border-violet-500"
                  />
                </div>
              ))}
            </div>
            <div className="mt-16 w-full flex md:h-16 h-12 justify-center items-center">
              <p className="text-3xl bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500 bg-clip-text text-transparent font-bold">
                LATEST RELEASE
              </p>
            </div>
            <div className="hover:small-scroll mt-6 mb-4 grid grid-flow-col auto-cols-max max-w-screen grid-rows-1 gap-3 md:gap-6 overflow-x-auto h-36 md:h-56">
              {o.map((x, index) => (
                <>
                  <div
                    className="relative w-24 md:w-36 h-full flex items-stretch"
                    key={x?.media?.title?.userPreferred}
                  >
                    <img
                      src={x?.media?.coverImage?.large}
                      alt="Anime pic"
                      className="w-full h-full object-over opacity-75 border-2 border-violet-500"
                    />
                    <div className="absolute z-10 left-0 top-0 text-white font-bold bg-black bg-opacity-45 backdrop-blur-3xl text-xs rounded-br-lg px-2 py-1 shadow-2xl">
                    {`EP: ${x?.episode}`}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center">
            <p className="text-orange-500 dark:text-orange-400 text-lg md:text-xl">
              No results Found!
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default function Mre({ params, searchParams }) {
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
