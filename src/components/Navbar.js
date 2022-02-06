import React from 'react';
// import Earth from "../img/earth.png";



export default function Navbar() {
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + "/img/earth.png"} className="nav--logo"/>
            <p className='nav--paragraph'>My travel journal</p>
        </nav>
    );
}