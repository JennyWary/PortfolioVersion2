import React from "react";
import "./TechItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TechItem() {
    const items = [
        { image: "./image/tech/html.png", name: "HTML" },
        { image: "./image/tech/css.png", name: "CSS" },
        { image: "./image/tech/js.png", name: "JAVASCRIPT" },
        { image: "./image/tech/php.png", name: "PHP" },
        { image: "./image/tech/java.png", name: "JAVA" },
        { image: "./image/tech/mysql.png", name: "MYSQL" },
        { image: "./image/tech/react.png", name: "REACT" },
        { image: "./image/tech/typo3.png", name: "TYPO3" },
        { image: "./image/tech/bootstrap.png", name: "BOOTSTRAP" },
    ];

    return (
        <div className="container-grid row justify-content-center">

            {items.map((item, index) => (
                <div key={index} className="containerTech d-flex align-items-center">
                    <img src={item.image} alt={item.name} className="sprache-image me-2"/>
                    <div className="text">{item.name}</div>
                </div>
            ))}
        </div>
    );
}
