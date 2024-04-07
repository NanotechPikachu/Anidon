"use client"

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Result() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');
  const [params] = useSearchParams();
  const query = params.get('anime');

  useEffect(() => {
    if (query) {
      setQuery(query)
    }
  }, [query]);
  return (
    <div>{query}</div>
  )
}
