import { Suspense } from 'react';
import { download, stream } from '../functions/gogo.js';

async function Download({ searchParams }) {
  const params = searchParams;
  console.log(params);
  const link = params?.link;
  const anime = params?.anime;
  const episode = params?.episode;

  if (!link) {
    console.error('No link provided in searchParams');
    return (
      <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center">
      <p>Invalid Anime!</p>
      </div>
    );
  };

  let data = await download(link);
  let dat = await stream(link);
  let m = data;
  let y = dat?.sources;

  if (!m || !y) {
    console.error('Anime not found!');
    return (
      <div className="flex flex-grow w-full min-h-screen items-center justify-center text-center">
      <p>Anime Not Found!</p>
      </div>
    );
  };

  console.log(m)
  return (
    <>
    <div className="ml-6 mr-6 mt-6 mb-20">
    {m ? (
    <div>{/*`${JSON.stringify(m)} | ${JSON.stringify(y)}`*/}
    <div className="mt-20">
    <h1 className="text-2xl text-center font-bold">{anime}</h1>
    <p className="font-mono mt-3 text-sm text-center">{`Episode: ${episode}`}</p>
    </div>
    <div className="w-full mt-4">
    <h1 className="text-xl font-bold">Download Link(s)</h1>
    <div className="mt-2">
    {m?.map((i) => ( <div key={i.source}><a href={i.link}><div className="border-2 flex justify-center items-center"><p className="text-base p-2">{i.source}</p></div></a></div> ))}
    </div>
    </div>
    </div>
    ) : (<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p>No results Found!</p></div>)}
    </div>
    </>
  );
}

export default function Dwld({ params, searchParams }) {
  return (
    <Suspense fallback={<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p>Loading...</p></div>}>
      <Download searchParams={searchParams} />
    </Suspense>
  );
}