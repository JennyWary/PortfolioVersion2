import React from "react";
import "./css/Timeline.css";
import InfoRechts from "../components/InfoRechts";
import InfoLinks from "../components/InfoLinks";

export default function TimeLine() {
    return (
        <div className="timeline-container">

            {/*<div className="timeline-dot"></div>*/}
            <InfoRechts/>
            <div className="timeline">
                <div className="timeline-dot"></div>
            </div>
            <div className="space"></div>
            <div className="space"></div>
            <div className="timeline">
                <div className="timeline-dot"></div>
            </div>
            <InfoLinks/>
            <InfoRechts/>
            <div className="timeline">
                <div className="timeline-dot"></div>
            </div>
            <div className="space"></div>
            <div className="space"></div>
            <div className="timeline">
                <div className="timeline-dot"></div>
            </div>
            <InfoLinks/>


        </div>
    );
}
