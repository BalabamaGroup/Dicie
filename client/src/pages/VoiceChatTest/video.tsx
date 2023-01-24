import { useEffect, useRef } from 'react';

interface VideoProps {
  stream: MediaStream;
  isMuted?: boolean;
}

const Video = ({ stream, isMuted }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) videoRef.current.srcObject = stream;
  }, [videoRef.current, stream]);

  return <video ref={videoRef} autoPlay muted={isMuted} />;
};

export default Video;
