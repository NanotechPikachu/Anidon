"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  return (
    <>
    <form>
    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for an anime.." />
    <button type="submit">Search</button>
    </form>
    </>
  );
}
