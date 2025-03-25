import React from "react";
import "./Zeitstrahl.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoRechts from "./InfoRechts";
import InfoLinks from "./InfoLinks";

export default function TimeLine() {
    const infoData = [
        {
            date: "2021 – 2024",
            title: "B-FACTOR GMBH",
            details: [
                "Ausbildung zur Fachinformatikerin für Anwendungsentwicklung",
                "Aufbau tiefgreifender Kenntnisse und praktischer Erfahrung in der Webentwicklung",
                "Anwendung verschiedener Technologien, darunter HTML, CSS, Javascript, PHP und TYPO3"
            ]
        },
        {
            date: "2021 – 2024",
            title: "IT.SCHULE STUTTGART",
            details: [
                "Ausbildung zur Fachinformatikerin für Anwendungsentwicklung",
                "Erlernen von vielfältigen Kenntnissen in der Softwareentwicklung, Programmiersprachen (Java, Python, SQL) und Netzwerktechnologien",
                "Grundlagen des Projektmanagements, Buchführung und Rechnungswesen"
            ]
        },
        {
            date: "2019 – 2021",
            title: "HOCHSCHULE FÜR TECHNIK STUTTGART",
            details: [
                "Bachelorstudium Informatik",
                "Einführung in die Grundlagen der Informatik und Mathematik"
            ]
        },
        {
            date: "2016 - 2018",
            title: "KÄUFMÄNNISCHES SCHULZENTRUM BÖBLINGEN",
            details: [
                "Berufskolleg 1 & 2 Wirtschaftsinformatik (Fachabitur)",
                "Einführung in die Grundlagen der Informatik"
            ]
        }
    ];

    return (
        <div className="mb-100">
            <h1 className="text-center mt-5 display-3 text-white fw-medium mb-100">Erfahrung</h1>
                {infoData.map((item, index) => (
                    <div key={index} className="timeline-container" >
                        {index % 2 === 0 ? (
                            < >
                                <InfoLinks info={[item]} />
                                <div className="timeline">
                                    <div className="timeline-dot"></div>
                                </div>
                                <div className="space"></div>
                            </>
                        ) : (
                            < >
                                <div className="space"></div>
                                <div className="timeline">
                                    <div className="timeline-dot"></div>
                                </div>
                                <InfoRechts info={[item]} />
                            </>
                        )}
                    </div>
                ))}
        </div>
    );
}
