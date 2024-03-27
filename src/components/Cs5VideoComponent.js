import React from "react"
import finalDesignScopeTool from "../images/finalDesignScopeTool.mp4"

class Cs5VideoComponent extends React.Component {
    render() {
        return (
            <video
                autoPlay
                width="60%"
                height="100%"
                preload="auto"
                style={{ margin: `0 auto` }}
            >
                <source src={finalDesignScopeTool} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
        )
    }
}

export default Cs5VideoComponent
