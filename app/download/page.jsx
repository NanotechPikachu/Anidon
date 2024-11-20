'use client'

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

export default function DownloadPage() {
  const params = useSearchParams();
  const videoUrl = params.get('videoUrl');

  const [progress, setProgress] = useState(0);
  const { data, error } = useSWR(videoUrl, async (url) => {
    const response = await fetch(url);
    const reader = response.body.getReader();

    let receivedLength = 0;
    let totalLength = Number(response.headers.get('Content-Length'));

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      receivedLength += value.length;
      setProgress((receivedLength / totalLength) * 100);
    }
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <p>Download Progress: {progress}%</p>
      {/* Add your video player or download link here */}
    </div>
  );
}