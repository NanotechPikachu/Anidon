"use client"

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { search } from '../functions/gogo.js';

function Result() {
  const [data, setData] = useState({ results: [] });
  const params = useSearchParams();
  const anime = params.get('anime');

  useEffect(() => {
    if (anime) {
      search(anime).then((ans) => {
        //console.log(ans);
        setData(ans);
      });
    }
  }, [anime]);

  const m = data.results; console.log(m)
  return (
    <div className="mt-10 mr-6 ml-6">
    {m?.map((x, index) => ( 
    <div key={index} className="border-2"> 
    <span className="text-base">Anime: {x.title}</span>
     </div>
    ))}
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
