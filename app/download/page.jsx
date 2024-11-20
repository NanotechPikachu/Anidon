'use client'

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

export default function DownloadPage() {
  const params = useSearchParams();
  const videoUrl = params.get('videoUrl');

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const eventSource = new EventSource(`/api/download?videoUrl=${encodeURIComponent(videoUrl)}`);

    eventSource.onmessage = (event) => {
      setProgress(parseInt(event.data));
    };

    eventSource.onerror = (error) => {
      console.error('Error fetching video:', error);
    };

    return () => {
      eventSource.close();
    };
  }, [videoUrl]);

  return (
    <div>
      <p>Download Progress: {progress}%</p>
      {/* Add your video player or download link here */}
    </div>
  );
}