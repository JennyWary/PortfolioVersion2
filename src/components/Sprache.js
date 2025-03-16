import React from "react";
import "./css/sprache.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import htmlImage from "./image/html.png";

export default function Sprache() {
    return (
        <div className="sprache-container mt-3">
            <div className="col-4 col-md-2 text-center">
                 <img src={htmlImage} alt="Code Beispiel" className="sprache-image"/>
            </div>
            <div className="sprache-text col-8 col-md-10">
              <div className="mb-0">HTML</div>
            </div>
        </div>
    );
}
