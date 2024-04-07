"use client"

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { search } from '../functions/gogo.js';

function Result() {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  const params = useSearchParams();
  const anime = params.get('anime');

  useEffect(() => {
    if (anime) {
      setLoading(true);
      search(anime).then((ans) => {
        console.log(ans);
        setData(ans);
        setLoading(false);
      });
    }
  }, [anime]);

  const m = data.results;
  return (
    <div className="mt-10 mr-6 ml-6">
    {loading ? (
        <p>Loading...</p> // Display loading message while fetching data
      ) : m.length > 0 ? (m?.map((x, index) => ( 
    <div key={index} className="border-2"> 
    <span className="text-base">Anime: {x.title}</span>
     </div>
    ))) : (<p>No results</p>)}
    </div>
  );
}

export default function Res() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Result />
    </Suspense>
  );
}
