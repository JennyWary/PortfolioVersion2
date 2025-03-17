import React from "react";
import "./css/ProjektItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjektItem from "./ProjektItem";

export default function Projekt() {
    return (
        <div>
            <h1 className="text-center mt-5 mb-4 display-3 color">Projekte</h1>
            <div className="row justify-content-center">
            <div className=" justify-content-between">
                    <ProjektItem />
                </div>
            </div>
        </div>
    );
}
