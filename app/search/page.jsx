"use client"

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Result() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.query.anime) {
      setQuery(router.query.anime)
    }
  }, [router.query]);
  return (
    <div>{query}</div>
  )
}
