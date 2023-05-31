import React from 'react';
import logo from './logo.svg';
import './header.css';
import json from './contant.json';
import Navgtion from './navgtion';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <nav>
            <Link to='/'><img className="logo" src={logo} alt="Al Ekhwa Logo" /></Link>
            <div id='navgtion'>
                        {json.map((x) => <Navgtion title={x.divTitle} className={x.className}>{x.divName}</Navgtion>)}
                </div>
            </nav>
        </div>
    )
}

export default Header;