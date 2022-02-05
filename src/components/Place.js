import React from "react";
import MountFuji from "../img/mountFuji.png";
import Icon from "../img/icon.png"
export default function Place(props) {

    return (
        <div className="place">
            <div className="place--imgAndSection">
            <img src={MountFuji} className="place--image"/>
            <section className="place--section">
                <div className="place--location">
                    <img src={Icon} className="place--icon" />
                    <span className="place--country">JAPAN</span>
                    <span className="place--ref">View on Google Maps</span>
                </div>
                <p className="place--name">Mount Fuji</p>
                <p className="place--date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="place--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </section>
            </div>
            <hr className="place--line"/>
             {/* <p>{props.object.title}</p> */}
            {/* <img src={props.object.imageUrl} /> */}
        </div>
    )
}