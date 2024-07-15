import React, {useEffect, useRef, useState} from 'react'
import io from 'socket.io-client'
import SimplePeer, {SignalData} from 'simple-peer'

const socket = io('http://localhost:3000')
const VideoChat = () => {
  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)
  const peerRef = useRef<RTCPeerConnection | null>(null)
  const [localStream, setLocalStream] = useState<MediaStream | null>(null)
  const [roomID, setRoomID] = useState<string>('')

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({video: true, audio: true}).then((stream) => {
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream
      }
      setLocalStream(stream)
    })

    socket.on('message', async (message) => {
      const {type, payload} = message
      if (type === 'offer') {
        await peerRef.current?.setRemoteDescription(new RTCSessionDescription(payload))
        const answer = await peerRef.current?.createAnswer()
        await peerRef.current?.setLocalDescription(new RTCSessionDescription(answer!))
        socket.emit('message', {type: 'answer', payload: answer, roomID})
      } else if (type === 'answer') {
        await peerRef.current?.setRemoteDescription(new RTCSessionDescription(payload))
      } else if (type === 'candidate') {
        await peerRef.current?.addIceCandidate(new RTCIceCandidate(payload))
      }
    })

    return () => {
      socket.off('message')
    }
  }, [roomID])

  const createPeerConnection = () => {
    peerRef.current = new RTCPeerConnection()
    localStream?.getTracks().forEach((track) => {
      peerRef.current?.addTrack(track, localStream)
    })

    peerRef.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('message', {type: 'candidate', payload: event.candidate, roomID})
      }
    }

    peerRef.current.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0]
      }
    }
  }

  const createRoom = async () => {
    setRoomID(Math.random().toString(36).substr(2, 9)) // Генерация случайного ID комнаты
    createPeerConnection()

    const offer = await peerRef.current?.createOffer()
    await peerRef.current?.setLocalDescription(new RTCSessionDescription(offer!))
    socket.emit('message', {type: 'offer', payload: offer, roomID})
  }

  const joinRoom = async (roomID: string) => {
    setRoomID(roomID)
    createPeerConnection()
  }

  return (
    <div>
      <button onClick={createRoom}>Create Room</button>
      <input type='text' placeholder='Enter Room ID' value={roomID} onChange={(e) => setRoomID(e.target.value)} />
      <button onClick={() => joinRoom(roomID)}>Join Room</button>
      <div>
        <video ref={localVideoRef} autoPlay playsInline muted />
        <video ref={remoteVideoRef} autoPlay playsInline />
      </div>
    </div>
  )
}

export default VideoChat
