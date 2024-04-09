//import { useRouter } from 'next/navigation';
 
export default function NotFound() {
  const router = useRouter();
 
 /* function change() {
    router.push('/');
  };*/
 
  return (
    <div className="flex flex-grow justify-center w-full min-h-screen items-center flex-col">
    <h2 className="text-lg md:text-2xl xl:text-3xl">Seems like you&apos;re lost</h2>
    <button className="border-2 border-violet-700 text-indigo-400 font-bold p-3 rounded-full" onClick={/*() => change()*/}>Return Home</button>
    </div>
  )
}
