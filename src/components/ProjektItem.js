import React from "react";
import "./css/ProjektItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sprache from "./Sprache";

export default function ProjektItem() {
    return (
        <div className="container mt-4 containerProjekt">
            <div className="row d-flex align-items-center">
                {/* Bild auf der linken Seite */}
                <div className="col-md-6 text-center">
                    <img src="./image/laptop.jpg" alt="Code Beispiel" className="img-fluid rounded"/>
                </div>

                {/* Text und Sprachen auf der rechten Seite */}
                <div className=" col-md-6 d-flex flex-column align-items-center text-white">
                    <h3 className="my-3">Titel</h3>
                    <p className="text-center">
                        Dies ist der Quellcode für meine persönliche Portfolio-Webseite. Die Webseite bietet einen
                        Überblick über meine beruflichen Erfahrungen, Projekte, Fähigkeiten und persönliche Interessen.
                    </p>

                    {/* Sprachen unter dem Text */}
                    <div className="d-flex gap-3">
                        <Sprache />
                        <Sprache />
                        <Sprache />
                    </div>
                </div>
            </div>
        </div>
    );
}
