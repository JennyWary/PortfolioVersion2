import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Info.css';

export default function InfoLinks() {
    const info = {
        date: "2024 - 2024",
        title: "B-FACTOR GMBH",
        details: [
            "Ausbildung zur Fachinformatikerin für Anwendungsentwicklung",
            "Aufbau tiefgreifender Kenntnisse und praktischer Erfahrung in der Webentwicklung",
            "Anwendung verschiedener Technologien, darunter HTML, CSS, Javascript, PHP und TYPO3"
        ]
    };

    return (
        <div className="container info-container p-3">
            <div className="date fw-bold">{info.date}</div>
            <div className="title h5">
                <b>{info.title}</b>
            </div>
            <ul>
                {info.details.map((detail, index) => (
                    <li key={index} className="mb-1">{detail}</li>
                ))}
            </ul>
        </div>
    );
}
