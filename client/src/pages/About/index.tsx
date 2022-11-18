import { useEffect, useRef } from 'react';

import WebSocketApi from './WebSocketApi';

const About = () => {
  const localVideo = useRef<HTMLVideoElement>(null);
  const remoteVideo = useRef<HTMLVideoElement>(null);

  const servers = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
  const api = new WebSocketApi();

  let localPeerConnection: RTCPeerConnection | null = null;
  let remotePeerConnection: RTCPeerConnection | null = null;

  // local user interactions
  navigator.mediaDevices
    // getting user webcam
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      if (localVideo.current) localVideo.current.srcObject = stream;
      const videoTrack = stream.getVideoTracks()[0];
      localPeerConnection = new RTCPeerConnection(servers);

      // send local candidate to server
      localPeerConnection.addEventListener('icecandidate', (e) => {
        if (e.candidate)
          api.send({ event: 'LOCAL_CANDIDATE', payload: e.candidate });
      });

      // add tracking for provided video
      localPeerConnection.addTrack(videoTrack, stream);

      // create offer with provided candidate and description
      localPeerConnection.createOffer().then((description) => {
        if (!localPeerConnection) return;
        localPeerConnection.setLocalDescription(description);
        api.send({ event: 'LOCAL_DESCRIPTION', payload: description });
      });

      // add remote candidate to server
      api.on('REMOTE_CANDIDATE', (candidate: RTCIceCandidate) => {
        localPeerConnection?.addIceCandidate(new RTCIceCandidate(candidate));
      });

      // update remote description
      api.on('REMOTE_DESCRIPTION', (description: any) => {
        localPeerConnection?.setRemoteDescription(description);
      });
    });

  remotePeerConnection = new RTCPeerConnection(servers);
  api.on('LOCAL_DESCRIPTION', (description: any) => {
    remotePeerConnection?.setRemoteDescription(description);

    remotePeerConnection?.addEventListener('icecandidate', (e) => {
      if (e.candidate)
        api.send({ event: 'REMOTE_CANDIDATE', payload: e.candidate });
    });

    api.on('LOCAL_CANDIDATE', (candidate: RTCIceCandidate) => {
      remotePeerConnection?.addIceCandidate(new RTCIceCandidate(candidate));
    });

    remotePeerConnection?.addEventListener('track', (e) => {
      console.log('GET TRACK');
      if (e.streams && remoteVideo.current)
        remoteVideo.current.srcObject = e.streams[0];
    });

    remotePeerConnection?.createAnswer().then((description) => {
      remotePeerConnection?.setLocalDescription(description);
      api.send({ event: 'REMOTE_DESCRIPTION', payload: description });
    });
  });

  return (
    <div>
      <h1>About page</h1>
      <video ref={localVideo} autoPlay />
      <video ref={remoteVideo} autoPlay />
    </div>
  );
};

export default About;
