"use client"

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { search } from '../functions/gogo.js';

function Result() {
  const [data, setData] = useState('Waiting...');
  const [query, setQuery] = useState(null);
  const params = useSearchParams();
  const anime = params.get('anime');

  useEffect(() => {
    if (anime) {
      setQuery(anime)
      const ans = search(anime).then((ans) => {
      setData(ans?.results)
      console.log(query, ans)
    });
    }
  }, [anime]);

  return (
    <>
    <div className="mt-10 mr-6 ml-6">
    <h1 className="font-bold">{JSON.stringify(data)}
    </h1>
    </div>
    </>
  )
}
export default function Res() {
  return (
    <div><Suspense fallback="loading"><Result /></Suspense></div>
  )
}
