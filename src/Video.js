import React, { useRef, useState } from "react"
import "./Video.css"
import VideoFooter from "./VideoFooter"
import VideoSidebar from "./VideoSidebar"
import VideoHeader from "./VideoHeader"

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
        src="https://player.vimeo.com/external/508153555.sd.mp4?s=0b3134d09b661361d8d9e89a39164feadf9f9bb1&profile_id=165&oauth2_token_id=57447761"
      ></video>
      <VideoHeader channel="lovegoals" />
      <VideoFooter
        channel="lovegoals"
        description="lol, baecation is going on well"
        song="Running Over - Justin Beiber ft..."
      />
      <VideoSidebar />
    </div>
  )
}

export default Video
