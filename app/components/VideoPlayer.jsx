'use client'

function VideoPlayer({ src }) {
  return (
    <video src={src} width={640} height={360} controls />
  );
}

export default VideoPlayer;