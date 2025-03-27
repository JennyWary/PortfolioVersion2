import React from "react";
import "./ProjektItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sprache from "./Sprache";

// Sprach-Icons importieren
import htmlImage from "../image/html.png";
import cssImage from "../image/css.png";
import jsImage from "../image/js.png";
import bsImage from "../image/bs.png";
import reactImage from "../image/react.png";
import phpImage from "../image/php.png";
import mysqlImage from "../image/mysql.png";

export default function ProjektItem() {
    const ProjektData = [
        {
            image: "./image/tomorrowsFilmwork.gif",
            titel: "TOMORROWS FILMWORK",
            text: [
                "Entwicklung einer professionellen Portfolio-Webseite für einen Videoproduzenten. " +
                "Diese Website wurde entwickelt, um das Portfolio eines freiberuflichen Videoproduzenten optimal zu präsentieren."
            ],
            sprache: [
                { name: "HTML", image: htmlImage, farbe: "html" },
                { name: "CSS", image: cssImage, farbe: "css" },
                { name: "BOOTSTRAP", image: bsImage, farbe: "bs" },

            ],
            link: "https://tomorrows-filmwork.com/",
        },
        {
            image: "./image/portfolioV2.gif",
            titel: "PORTFOLIO VERSION2",
            text: [
                "Ein Portfolio das eine moderne und responsive Benutzeroberfläche bietet. " +
                "Es enthält ein ansprechendes Design und eine übersichtliche Darstellung meiner Projekte und Fähigkeiten."
            ],
            sprache: [
                { name: "HTML", image: htmlImage, farbe: "html" },
                { name: "CSS", image: cssImage, farbe: "css" },
                { name: "BOOTSTRAP", image: bsImage, farbe: "bs" },
                { name: "REACT", image: reactImage, farbe: "react" },

            ],
            link: "",
        },

        {
            image: "./image/portfolio.gif",
            titel: "PORTFOLIO",
            text: [
                "Entwicklung einer modernen und responsiven Portfolio-Webseite mit HTML, CSS und Javascript. " +
                "Die Webseite bietet einen übersichtlichen Einblick in meine beruflichen Erfahrungen, Projekte, Fähigkeiten und persönlichen Interessen"
            ],
            sprache: [
                { name: "HTML", image: htmlImage, farbe: "html" },
                { name: "CSS", image: cssImage, farbe: "css" },
                { name: "JAVASCRIPT", image: jsImage, farbe: "js" },
                { name: "BOOTSTRAP", image: bsImage, farbe: "bs" },

            ],

        },
        {
            image: "./image/commingSoon.png",
            titel: "LANDING PAGE",
            text: [
                "Entwicklung eines Prototyps für die Landing Page eines Start-ups mit Fokus auf eine kundenorientierte Umsetzung. Die Realisierung erfolgte mit HTML, CSS und Bootstrap."
            ],
            sprache: [
                { name: "HTML", image: htmlImage, farbe: "html" },
                { name: "CSS", image: cssImage, farbe: "css" },
                { name: "BOOTSTRAP", image: bsImage, farbe: "bs" },

            ],
        },
        {
            image: "./image/commingSoon.png",
            titel: "BLOG WEBSEITE",
            text: [
                "Design und Entwicklung einer klassischen Blog-Webseite mit Anmelde- und Kommentarfunktion. Die Umsetzung erfolgte mit HTML, CSS, PHP und SQL."
            ],
            sprache: [
                { name: "HTML", image: htmlImage, farbe: "html" },
                { name: "CSS", image: cssImage, farbe: "css" },
                { name: "PHP", image: phpImage, farbe: "php" },
                { name: "MYSQL", image: mysqlImage, farbe: "mysql" },
            ],

        },
    ];

    return (
        <div className="container mt-4 containerProjekt ">
            {ProjektData.map((item, index) => (
                <div className="row d-flex align-items-center mb-50 " key={index}>

                    <a href={item.link} className="col-md-6 text-center">
                            <img src={item.image} alt="Projekt" className="img-fluid rounded border-purple"/>
                    </a>
                    <div className="col-md-6 d-flex flex-column text-white">
                        <h3 className="my-3 d-flex flex-column align-items-center ">{item.titel}</h3>
                        {item.text.map((line, i) => (
                            <p className="text-r" key={i}>{line}</p>
                        ))}

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
