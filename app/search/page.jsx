"use client"

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Result() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');
  const [params] = useSearchParams();
  const anime = params.get('anime');

  useEffect(() => {
    if (anime) {
      setQuery(anime)
    }
  }, [anime]);
  return (
    <div>{query}</div>
  )
}
