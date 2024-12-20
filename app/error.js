'use client'
 
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
 
export default function Error({ error, reset }) {
  const router = useRouter();
  
  useEffect(() => {
    console.error(error)
  }, [error])

  function page() {
    router.push('/');
  };
 
  return (
    <>
    <div className="flex flex-grow min-h-screen  w-full justify-center items-center flex-col">
    <h2 className="text-lg md:text-2xl xl:text-3xl text-rose-700 font-bold">Uh Oh!</h2>
    <p className="text-base md:text-lg xl:text-xl text-rose-700 mt-2">Something went haywire!</p>
    <div className="flex flex-row w-full justify-center items-center gap-5 mt-6">
    <button
      onClick={() => reset()}
      className="border-2 border-violet-700 font-bold p-3 rounded-full text-indigo-400"
    >
    Refresh
    </button>
    <button
      onClick={() => page()}
      className="border-2 border-violet-700 font-bold p-3 rounded-full text-indigo-400"
    >
    Go to Home
    </button>
    </div>
    </div>
    </>
  )
}
