import React, { useEffect, useRef } from "react";
import background from './AdvertiseBoard.svg';
import adVideo from './01.mp4'
import './advertiseBoard.css';

function AdvertiseBoard() {
    const videoEl = useRef(null);

    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
          console.error("Error attempting to play", error);
        });
    };
  
    useEffect(() => {
      attemptPlay();
    }, []);
    return (
        <div className="AdvertiseBoard">
            <img src={background} alt="DALOOH Homepage Background" id="adbackground"/>
                <video
                    src={adVideo}
                    loop
                    muted
                    alt="DALOOH Homepage Main Video"
                    ref={videoEl}
                    id="ad-video"
                />
        </div>
    )
}

export default AdvertiseBoard;