import Player from 'next-video/player';

function VideoPlayer({ src }) {

  return (
    <Player src={src} width={640} height={360} controls />
  );
}

export default VideoPlayer;