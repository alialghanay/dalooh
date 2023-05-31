import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './visitus.css';
import svg from './bk2.svg';


function VisitUs() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(13.1801);
    const [lat] = useState(32.8779);
    const [zoom] = useState(15);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: zoom
    });   
      });
    return (
        <div id="visit-us">
            <img src={svg} alt='' id='visit-frame' />
            <div id="visit-us-container">
                <h1>Visit Us</h1>
                <p>here is our Location: Sayidi Khalifa Rd, Tripoil -Libya</p>
                <div ref={mapContainer} id="vist-map-container" />
            </div>
        </div>
    );
}

export default VisitUs;