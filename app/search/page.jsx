"use client"

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { search } from '../functions/gogo.js';

function Result() {
  const [data, setData] = useState('Waiting...');
  const params = useSearchParams();
  const anime = params.get('anime');

  useEffect(() => {
    if (anime) {
      const ans = search(anime).then((ans) => {
      console.log(ans)
      setData(ans)
      console.log(ans)
    });
    }
  }, [anime]);
  console.log(data)

  return (
    <>
    <div className="mt-10 mr-6 ml-6">
    {data.results?.map((x, index) => {
    <div className="border-2"><span className="text-base">Anime: {x.title}</span>
    </div>
    })
    }
    </div>
    </>
  )
}
export default function Res() {
  return (
    <div><Suspense fallback="loading"><Result /></Suspense></div>
  )
}
