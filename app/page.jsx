"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`search?search=${encodeURIComponent(searchTerm)}`);
  };
  
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for an anime.." />
    <button type="submit">Search</button>
    </form>
    </>
  );
}
