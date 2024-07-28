//  **************************************************
//  **********  /src/components/UseRef.jsx  **********
//  **************************************************


//import './App.css';
import React, { useRef } from "react";
import video from "../assets/video.mp4";


export const UseRef = () => {

    const videoRef = useRef(null);

    const videoPlay = () => {
        videoRef.current.play();
    };

    const videoPause = () => {
        videoRef.current.pause();
    };

    //  *****  Renderiza elementos  *****
    return (

        <div>

            <video ref={videoRef} width="800" height="600">
                <source src={video} type="video/mp4" />
            </video>

            <div>
                <br />
                <button onClick={videoPlay}> Play </button>
                <button onClick={videoPause}> Pause </button>
            </div>

        </div>
    )
}




