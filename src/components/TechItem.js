import React from "react";
import "./css/TechItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TechItem() {
    const items = [
        { image: "./image/tech/html.png", name: "HTML" },
        { image: "./image/tech/css.png", name: "CSS" },
        { image: "./image/tech/JS.png", name: "JAVASCRIPT" },
        { image: "./image/tech/php.png", name: "PHP" },
        { image: "./image/tech/java.png", name: "JAVA" },
        { image: "./image/tech/mysql.png", name: "MYSQL" },
        { image: "./image/tech/react.png", name: "REACT" },
        { image: "./image/tech/typo3.png", name: "TYPO3" },
        { image: "./image/tech/bootstrap.png", name: "BOOTSTRAP" },
    ];

    return (
        <div className="container-grid justify-content-center">
            {items.map((item, index) => (
                <div key={index} className="containerTech tech-item d-flex align-items-center p-3 m-2">
                    <img src={item.image} alt={item.name} className="sprache-image me-2"/>
                    <div className="text">{item.name}</div>
                </div>
            ))}
        </div>
    );
}
