"use client"

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { search } from '../functions/gogo.js';

async function Result() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');
  const params = useSearchParams();
  const anime = params.get('anime');

  useEffect(() => {
    if (anime) {
      setQuery(anime)
      const ans = await search(query);
      setData(ans);
    }
  }, [anime]);

  return (
    <>{JSON.stringify(data)}</>
  )
}
export default function Res() {
  return (
    <div><Suspense fallback="loading"><Result /></Suspense></div>
  )
}
