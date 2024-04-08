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
    <div>{/*`${JSON.stringify(m)} | ${JSON.stringify(y)} | ${anime}`*/}
    <div className="mt-20">
    <h1 className="text-2xl text-center font-bold">{anime}</h1>
    <p className="font-mono mt-3 text-sm text-center">{`Episode: ${episode}`}</p>
    </div>
{/*
    <div className="mt-4 flex justify-center items-center w-full">
    <div className="h-48 w-44">
    <img src={m.image} alt="Anime pic" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
    </div>
    </div>
    <br /><br /><br />
    <div className="w-full">
    <h2 className="text-lg underline font-bold">Description</h2>
    <p className="text-sm">{m.description || 'No information'}</p>
    <h2 className="text-lg mt-8 underline font-bold">Status</h2>
    <p className="text-sm">{m.status || 'No information'}</p>
    <h2 className="text-lg mt-8 underline font-bold">Genres</h2>
    <p className="text-sm">{m.genres?.join(", ") || 'No information'}</p>
    <h2 className="text-lg mt-8 underline font-bold">Release</h2>
    <p className="text-sm">{m.releaseDate || 'No information'}</p>
    <h2 className="text-lg mt-8 underline font-bold">Other Name(s)</h2>
    <p className="text-sm">{m.otherName || 'No information'}</p>
    <h2 className="text-lg mt-8 underline font-bold">{`Episode(s) (${m.totalEpisodes})`}</h2>
    <p className="text-sm">{a || 'No information'}</p>
    </div>
*/}
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