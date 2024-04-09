import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className="flex flex-grow justify-center w-full min-h-screen items-center flex-col">
    <h2 className="text-lg md:text-2xl xl:text-3xl mb-6">Seems like you&apos;re lost</h2>
    <Link href="/">
    <button className="border-2 border-violet-700 text-indigo-400 font-bold p-3 rounded-full">Return Home</button>
    </Link>
    </div>
  )
}
