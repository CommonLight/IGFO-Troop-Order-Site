import React from 'react'
import ReactPlayer from 'react-player'
import song from '../assets/audio/Imperial-March.mp3'


const AudioPlayer = () => {
  return (
    <div style={{
      width:"300px",
      margin:"50px auto"
      }}>
        <ReactPlayer 
        style={{
          opacity:"15%",
          marginTop:"-90px"}}
        url={song}
        playing={true}
        volume={.50}
        loop={true}
        controls={true}
        width="280px"
        height="30px"/>
    </div>
  )
}

export default AudioPlayer