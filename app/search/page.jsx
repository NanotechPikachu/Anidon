"use client"

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { search } from '../functions/gogo.js';

function Result() {
  const [data, setData] = useState({ results: [] }); // Initialize data as an object with a results array
  const params = useSearchParams();
  const anime = params.get('anime');

  useEffect(() => {
    if (anime) {
      search(anime).then((ans) => {
        console.log(ans);
        setData(ans); // Update the state with the new data
      });
    }
  }, [anime]); // Dependency array should contain only the variables that trigger re-runs

  return (
    <div className="mt-10 mr-6 ml-6">
      {data.results.map((x, index) => ( // Use parentheses to return JSX
        <div key={index} className="border-2"> {/* Add a key prop to each child in a list */}
          <span className="text-base">Anime: {x.title}</span>
        </div>
      ))}
    </div>
  );
}

export default function Res() {
  return (
    <Suspense fallback={<div>Loading...</div>}> {/* Use JSX for the fallback */}
      <Result />
    </Suspense>
  );
}
