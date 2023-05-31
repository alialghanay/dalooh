import './tutorial.css';
import React, {useState, useEffect, useRef} from 'react';
import video1 from './01.mp4';
import video2 from './02.mp4';

function Tutorial(){
    const [source_class, setSourceClass] = useState(video1);

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
        <div id="tutorial">
            <div id='changeVideo'>
                {source_class === video1 ? <p onClick={() => setSourceClass(video1)} className="clicked">The Power of OOH</p> : <p onClick={() => setSourceClass(video1)} className="unclicked">The Power of OOH</p>}
                {source_class === video2 ? <p onClick={() => setSourceClass(video2)} className="clicked">How it works</p> : <p onClick={() => setSourceClass(video2)} className="unclicked">How it works</p>}
            </div>
            <video
                src={source_class}
                loop
                alt="All the devices"
                ref={videoEl}
                id='t-video'
            />
        </div>
    );
}

export default Tutorial;