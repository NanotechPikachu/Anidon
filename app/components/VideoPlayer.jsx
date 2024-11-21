'use client'

import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

function VideoPlayer({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(videoRef.current);
    hls.on(Hls.Events.MANIFEST_LOADED, function () {
      console.log('Manifest loaded.');
    });
    hls.on(Hls.Events.ERROR, function (event, data) {
      if (data.fatal) {
        console.error('Fatal error:', data.err);
        hls.destroy();
      }
    });

    return () => {
      hls.destroy();
    };
  }, [src]);

  return (
    <video ref={videoRef} width={640} height={360} controls />
  );
}

export default VideoPlayer;