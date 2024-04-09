import { Suspense } from 'react';

async function More() {
  const m = false;

  return (
    <>
    <div className="ml-6 mr-6 mt-6 mb-20">
    {m ? (
    <div>
    <div className="mt-20">
    <h1 className="text-2xl text-center font-bold text-violet-900 hover:text-purple-400">{anime}</h1>
    <p className="font-mono mt-3 text-sm md:text-base text-center text-slate-50">{`Episode: ${episode}`}</p>
    </div>
    </div>
    ) : (<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-orange-500 dark:text-orange-400 text-lg md:text-xl">No results Found!</p></div>)}
    </div>
    </>
  );
}

export default function Mre({ params, searchParams }) {
  return (
    <Suspense fallback={<div className="flex flex-grow w-full min-h-screen items-center justify-center text-center"><p className="text-violet-600 text-lg md:text-xl">Loading...</p></div>}>
      <More />
    </Suspense>
  );
}