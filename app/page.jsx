import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  "use client"
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
