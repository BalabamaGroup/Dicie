import { useEffect, useRef, useState } from 'react';

import useWebRTC from '@/shared/hooks/useWebRTC';

import Video from './video';

const VoiceChatTest = () => {
  const { sendWebsocketData } = useWebRTC();

  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStreams, setRemoteStreams] = useState<MediaStream[]>([]);

  const servers = {
    iceServers: [
      {
        urls: 'turn:turn.anyfirewall.com:443?transport=tcp',
        credential: 'webrtc',
        username: 'webrtc',
      },
    ],
    iceCandidatePoolSize: 100,
  };

  let pc: RTCPeerConnection | null = null;

  const connect = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    setLocalStream(stream);

    pc = new RTCPeerConnection(servers);

    pc.addTrack(stream.getVideoTracks()[0], stream);

    pc.onicecandidate = async (event) => {
      if (event.candidate) {
        sendWebsocketData({
          event: 'candidate',
          payload: event.candidate,
        });
      }
    };

    pc.createOffer().then((offer) => {
      pc?.setLocalDescription(offer);
      sendWebsocketData({ event: 'offer', payload: offer });
    });

    pc.ontrack = async (event) => {
      setRemoteStreams([...event.streams]);
    };
  };

  useEffect(() => {
    window.addEventListener('candidate', async ({ detail: candidate }: any) => {
      console.log('got candidate', candidate);
      try {
        await pc?.addIceCandidate(candidate);
      } catch (e) {
        console.error('Error adding received ice candidate', e);
      }
    });

    window.addEventListener('offer', async ({ detail: offer }: any) => {
      console.log('got offer', offer);
      try {
        pc?.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await pc?.createAnswer();

        await pc?.setLocalDescription(answer);
        sendWebsocketData({
          event: 'answer',
          payload: answer,
        });
      } catch (e) {
        console.log('ERROR: couldnt receive remote offer');
      }
    });

    window.addEventListener('answer', async ({ detail: answer }: any) => {
      console.log('got answer', answer);
      try {
        const remoteDesc = new RTCSessionDescription(answer);
        await pc?.setRemoteDescription(remoteDesc);
      } catch (e) {
        console.log('ERROR: couldnt receive remote answer');
      }
    });
  }, []);

  console.log(remoteStreams);
  return (
    <div>
      <div>
        <button onClick={connect}>
          <h1>CONNECT</h1>
        </button>
      </div>
      {localStream && <Video stream={localStream} isMuted />}
      <div>
        {remoteStreams.map((stream) => (
          <Video key={stream.id} stream={stream} />
        ))}
      </div>
    </div>
  );
};

export default VoiceChatTest;
