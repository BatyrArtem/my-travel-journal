import React from 'react';
import { useNavigate } from "react-router-dom";

const YourComponent = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("https://goo.gl/maps/1DGM5WrWnATgkSNB8");
    }

    return (
        <div>
            <button onClick={handleClick} type="button">hi</button>
        </div>
    );
}

export default YourComponent;