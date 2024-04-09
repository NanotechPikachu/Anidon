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
    <div className="flex flex-grow min-h-screen w-full justify-center items-center flex-col">
    <h2 className="text-lg md:text-xl text-orange-600 font-bold">Uh Oh!</h2>
    <p className="text-base md:text-lg text-orange-600 mt-2">Uh Oh!</p>
    <div className="flex flex-row w-full justify-center items-center gap-2">
    <button
      onClick={() => reset()}
      className="border-2 border-violet-700"
    >
    Refresh
    </button>
    <button
      onClick={() => page()}
      className="border-2 border-violet-700"
    >
    Go to Home
    </button>
    </div>
    </div>
    </>
  )
}
