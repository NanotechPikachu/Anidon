'use client'

function VideoPlayer({ src }) {
  return (
    <video src={src} width={500} height={400} type="application/x-mpegURL" controls />
  );
}

export default VideoPlayer;