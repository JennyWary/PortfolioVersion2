import React from "react";
import "./css/sprache.css";
import 'bootstrap/dist/css/bootstrap.min.css';



// Dynamische Sprach-Komponente
export default function Sprache({ name, image, farbe }) {
    return (
        <div className={`sprache-container mt-3 d-flex align-items-center ${farbe}`}>
            <div className="col-4 col-md-2 text-center">
                <img src={image} alt={name} className="sprache-image"/>
            </div>
            <div className="sprache-text col-8 col-md-10">
                <div className="mb-0">{name}</div>
            </div>
        </div>
    );
}
