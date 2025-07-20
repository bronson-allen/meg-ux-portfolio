import React from "react"
import finalDesignVideo from "../images/finalDesignVideo.mp4"

class MyVideoComponent extends React.Component {
  render() {
    return (
      <video
        autoPlay
        width="80%"
        height="100%"
        preload="auto"
        style={{ margin: `0 auto` }}
      >
        <source src={finalDesignVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    )
  }
}

export default MyVideoComponent
