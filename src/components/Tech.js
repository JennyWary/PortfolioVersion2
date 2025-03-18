import React from "react";
import "./css/TechItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TechItem from "./TechItem";

export default function Tech(){
    return(
        <div className="containerTechStack">
            <h1 className="text-center mb-4 display-3 color">Tech-Stack</h1>
            <TechItem/>
        </div>
    )
}