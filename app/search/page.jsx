"use client"

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

function Result() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');
  const params = useSearchParams();
  const anime = params.get('anime');

  useEffect(() => {
    if (anime) {
      setQuery(anime)
    }
  }, [anime]);
  return (
    <>{query}</>
  )
}
export default function Res() {
  return (
    <div><Suspense fallback="loading"><Result /></Suspense></div>
  )
}
