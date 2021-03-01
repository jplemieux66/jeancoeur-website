import React from "react"

import videoStyles from "./video.module.scss"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className={videoStyles.videoWrapper}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      autoplay
    />
  </div>
)

export default Video
