import React from "react";
import "./css/Timeline.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoRechts from "../components/InfoRechts";
import InfoLinks from "../components/InfoLinks";

export default function TimeLine() {
    return (
        <div>
            <h1>Erfahrung</h1>
            <div className="timeline-container">
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
        </div>
    );
}
