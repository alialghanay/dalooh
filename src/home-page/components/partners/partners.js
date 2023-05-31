import React, { useState, useEffect } from 'react';
import './partners.css';

const dir = require('./par-logo/index');
function Partners() {
    const [ser_class, setSerClass] = useState("ser-components gird-contrler1");

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
    if((dir().length % 2) === 0){
        setSerClass("par-components gird-contrler2")
    }else {
        setSerClass("par-components gird-contrler1")
    }
  }, []);

    return(
        <div id='partners'>
            <h1>A selection of our satisfied advertising partners</h1>
            <div className={ser_class}>
                {dir().map(x => <img src={x} alt='alekhwa partners' className='par-logo'/>)}
            </div>
        </div>
    );
}

export default Partners;