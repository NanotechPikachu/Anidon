'use client'

function VideoPlayer({ src }) {
  return (
    <video src={src} width={640} height={360} type="application/x-mpegURL" controls />
  );
}

export default VideoPlayer;