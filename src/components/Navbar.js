import React from 'react';
import Earth from "../img/earth.png";



export default function Navbar() {
    return (
        <nav>
            <img src={Earth} className="nav--logo"/>
            <p className='nav--paragraph'>My travel journal</p>
        </nav>
    );
}