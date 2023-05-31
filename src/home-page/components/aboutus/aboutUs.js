import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './aboutUs.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpYWxnaGFuYXkiLCJhIjoiY2xocmxpazl4MDAzcjNxbnpmaHV2cWNudSJ9.DhRkwCiLOBxck_25XDTmaw';
mapboxgl.setRTLTextPlugin(
    'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    null,
    true // Lazy load the plugin
    );
function AboutUs() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(13.1801);
    const [lat, setLat] = useState(32.8779);
    const [zoom, setZoom] = useState(15);

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
        <div id="about-us">
            <div id="leftAbout">
                <div id="up-LA">
                    <h1>ABOUT US</h1>
                    <p>That's what makes the DALOOH!</p>
                </div>
                <div id="down-LA">
                    <div ref={mapContainer} id="map-container" />
                </div>
            </div>
            <ul id="rightAbout">
                <li>
                    Digital City Light Poster
                    <p>
                        Print posters were yesterday! DIGOOH 
                        markets digital city light posters in the
                        Outside at the point of sale and at high
                        frequented locations.
                    </p>
                </li>
                <li>
                    High-frequency advertising locations
                    <p>
                        Offer now their advertising location and
                        you will receive attractive ones in return
                        Rental income as a location partner
                        DIGOOH Media GmbH.
                    </p>
                </li>
                <li>
                    Digital communication solutions
                    <p>
                        Together with you we create digital
                        communication solutions to our
                        relevant and up-to-date informationto
                        offer.
                    </p>
                </li>
                <li>
                    Nationwide network
                    <p>
                        We are building our nationwide network 
                        steadily off. Be a part of it and benefit
                        you from our offer and our expertise.
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default AboutUs;