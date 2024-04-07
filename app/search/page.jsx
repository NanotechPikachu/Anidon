"use client"

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Result() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.query.search) {
      setQuery(router.query.search)
    }
  }, [router.query]);
  return (
    <div>{query}</div>
  )
}
