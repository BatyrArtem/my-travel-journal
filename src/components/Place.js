import React, {useRef} from "react";
import Icon from "../img/icon.png"
// import YourComponent from "./YourComponent";

export default function Place(props) {
    
    return (
        <div className="place">
            <div className="place--imgAndSection">
            {/* <img src={process.env.PUBLIC_URL + props.object.imageUrl} className="place--image"/> */} {/*если img лежит в public */}
            <img src={props.object.imageUrl2} className="place--image"/>

             
            <section className="place--section">
                <div className="place--location">
                    {/* <img src={process.env.PUBLIC_URL + "/img/icon.png"} className="place--icon" /> */}
                    <img src={Icon} className="place--icon" />
                    <span className="place--country">{props.object.location}</span>
                    <a target="_blank" className="place--ref" href={props.object.googleMapsUrl}>View on Google Maps</a>
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