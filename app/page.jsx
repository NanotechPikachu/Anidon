"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`search?anime=${encodeURIComponent(searchTerm)}`);
  };
  
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for an anime.." />
    <button type="submit">Search</button>
    </form>
// In your Next.js component
<div className="group relative bg-black text-white p-4 overflow-hidden">
  <div className="absolute inset-0 bg-violet-500 transition-all duration-500 ease-in-out group-hover:translate-x-0 translate-x-full"></div>
  <p className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-black">Hover over this div</p>
</div>

    </>
  );
}
