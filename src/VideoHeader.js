import React from "react"
import "./VideoHeader.css"

function VideoHeader({ channel }) {
  return (
    <div className="videoHeader">
      <div className="videoHeader__logo">
        <img
          src="http://pngimg.com/uploads/tiktok/small/tiktok_PNG7.png"
          alt=""
        />
        <p>TikTok</p>
      </div>
      <div className="videoHeader__channel">
        <h4>@{channel}</h4>
      </div>
    </div>
  )
}

export default VideoHeader
