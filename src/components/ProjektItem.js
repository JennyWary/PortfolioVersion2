import React from "react";
import "./css/ProjektItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sprache from "./Sprache";

export default function ProjektItem() {
    return (
        <div className="container mt-4 containerProjekt">
            <div className="row text-center">

                <div className="col-12">
                    <img src="./image/laptop.jpg" alt="Code Beispiel" className="img-fluid"/>
                </div>

                <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                    <h3 className="my-4 text-white">Titel</h3>
                    <p className="text-white">
                        Dies ist der Quellcode für meine persönliche Portfolio-Webseite. Die Webseite bietet einen
                        Überblick über meine beruflichen Erfahrungen, Projekte, Fähigkeiten und persönliche Interessen.
                    </p>
                </div>

                <div className="gap-3 col-12 d-flex align-items-start">
                    <Sprache />
                    <Sprache />
                    <Sprache />
                </div>
            </div>
        </div>
    );
}
