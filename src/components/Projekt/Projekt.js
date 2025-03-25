import React from "react";
import "./ProjektItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjektItem from "./ProjektItem";

export default function Projekt() {
    return (
        <>
            <h1 className="text-center mt-5 display-3 fw-medium text-white mb-100">Projekte</h1>
            <ProjektItem/>
        </>
    );
}
