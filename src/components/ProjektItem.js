import React from "react";
import "./css/ProjektItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sprache from "./Sprache";

// Sprach-Icons importieren
import htmlImage from "./image/html.png";
import cssImage from "./image/css.png";
import jsImage from "./image/js.png";
import bsImage from "./image/bs.png";
import reactImage from "./image/react.png";
import phpImage from "./image/php.png";
import mysqlImage from "./image/mysql.png";
// import typo3Image from "./image/typo3.png";

export default function ProjektItem() {
    const ProjektData = [
        {
            image: "./image/tomorrows-filmwork.png",
            titel: "PORTFOLIO VERSION2",
            text: [
                "Dies ist der Quellcode für meine persönliche Portfolio-Webseite. " +
                "Die Webseite bietet einen Überblick über meine beruflichen Erfahrungen, Projekte, Fähigkeiten und persönliche Interessen."
            ],
            sprache: [
                { name: "HTML", image: htmlImage, farbe: "html" },
                { name: "CSS", image: cssImage, farbe: "css" },
                { name: "BOOTSTRAP", image: bsImage, farbe: "bs" },
                { name: "REACT", image: reactImage, farbe: "react" },

            ]
        },
        {
            image: "./image/tomorrows-filmwork.png",
            titel: "TOMORROWS FILMWORK",
            text: [
                "Entwicklung einer professionellen Portfolio-Webseite für einen Videoproduzenten. " +
                "Diese Website wurde entwickelt, um das Portfolio eines freiberuflichen Videoproduzenten optimal zu präsentieren."
            ],
            sprache: [
                { name: "HTML", image: htmlImage, farbe: "html" },
                { name: "CSS", image: cssImage, farbe: "css" },
                { name: "Bootstrap", image: bsImage, farbe: "bs" },

            ]
        },
        {
            image: "./image/portfolio.png",
            titel: "PORTFOLIO",
            text: [
                "Dies ist der Quellcode für meine persönliche Portfolio-Webseite. Die Webseite bietet einen Überblick über meine beruflichen Erfahrungen, Projekte, Fähigkeiten und persönliche Interessen."
            ],
            sprache: [
                { name: "HTML", image: htmlImage, farbe: "html" },
                { name: "CSS", image: cssImage, farbe: "css" },
                { name: "JAVASCRIPT", image: jsImage, farbe: "js" },
            ],

        },
        {
            image: "./image/tomorrows-filmwork.png",
            titel: "LANDING PAGE",
            text: [
                "Entwicklung einer professionellen Portfolio-Webseite für einen Videoproduzenten. " +
                "Diese Website wurde entwickelt, um das Portfolio eines freiberuflichen Videoproduzenten optimal zu präsentieren."
            ],
            sprache: [
                { name: "HTML", image: htmlImage, farbe: "html" },
                { name: "CSS", image: cssImage, farbe: "css" },
                { name: "Bootstrap", image: bsImage, farbe: "bs" },

            ]
        },
        {
            image: "./image/tomorrows-filmwork.png",
            titel: "BLOG WEBSEITE",
            text: [
                "Entwicklung einer professionellen Portfolio-Webseite für einen Videoproduzenten. " +
                "Diese Website wurde entwickelt, um das Portfolio eines freiberuflichen Videoproduzenten optimal zu präsentieren."
            ],
            sprache: [
                { name: "HTML", image: htmlImage, farbe: "html" },
                { name: "CSS", image: cssImage, farbe: "css" },
                { name: "PHP", image: phpImage, farbe: "php" },
                { name: "MYSQL", image: mysqlImage, farbe: "mysql" },
            ]
        },
    ];

    return (
        <div className="container mt-4 containerProjekt">
            {ProjektData.map((item, index) => (
                <div className="row d-flex align-items-center mb-4" key={index}>
                    {/* Bild */}
                    <div className="col-md-6 text-center">
                        <img src={item.image} alt="Projekt" className="img-fluid rounded border"/>
                    </div>

                    {/* Text und Sprachen */}
                    <div className="col-md-6 d-flex flex-column text-white">

                        <h3 className="my-3 d-flex flex-column align-items-center ">{item.titel}</h3>
                        {item.text.map((line, i) => (
                            <p className="text-center" key={i}>{line}</p>
                        ))}

                        {/* Dynamische Darstellung der Sprachen */}
                        <div className="d-flex gap-3">
                            {item.sprache.map((lang, i) => (
                                <Sprache key={i} name={lang.name} image={lang.image} farbe={lang.farbe} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
