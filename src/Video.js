import React, { useRef, useState } from "react"
import "./Video.css"

function Video() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://player.vimeo.com/external/574094480.sd.mp4?s=a3c3e6783d95ffa52b01edce2ca7cf74c91ec797&profile_id=165&oauth2_token_id=57447761"
      ></video>
      {/* <VideoFooter/> */}
      {/* <VideoSidebar/> */}
    </div>
  )
}

export default Video
