import React from "react";
// import MountFuji from "../img/mountFuji.png";
// import Icon from "../img/icon.png"


export default function Place(props) {

    return (
        <div className="place">
            <div className="place--imgAndSection">
            <img src={process.env.PUBLIC_URL + props.object.imageUrl} className="place--image"/>
             
            <section className="place--section">
                <div className="place--location">
                    <img src={process.env.PUBLIC_URL + "/img/icon.png"} className="place--icon" />
                    <span className="place--country">{props.object.location}</span>
                    <span className="place--ref">View on Google Maps</span> {/* вставить ссылку на переход гугл карты*/}
                </div>
                <p className="place--name">{props.object.title}</p>
                <p className="place--date">{props.object.startDate} - {props.object.endDate}</p>
                <p className="place--description">{props.object.description}</p>
            </section>
            </div>
            <hr className="place--line"/>
        </div>
    )
}