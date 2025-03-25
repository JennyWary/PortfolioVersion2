import React from "react";
import "./TechItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TechItem from "./TechItem";

export default function Tech(){
    return(
        <div className="containerTechStack">
            <h1 className="text-center mt-5 mb-100 display-3 text-white fw-medium color">Tech-Stack</h1>
            <TechItem/>
        </div>
    )
}