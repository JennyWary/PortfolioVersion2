import 'bootstrap/dist/css/bootstrap.min.css';
import './Zeitstrahl.css';

export default function InfoLinks({ info = [] }) {  // Fallback-Wert: leeres Array []
    return (
        <div className="container info-container text-end">
            {info.length > 0 ? (
                info.map((item, index) => (
                    <div key={index}>
                        <div className="date fw-bold">{item.date}</div>
                        <div className="title h5">
                            <b>{item.title}</b>
                        </div>
                        <div dir="rtl">
                            <ul>
                                {item.details.map((detail, i) => (
                                    <li key={i} className="mb-1 detail">{detail}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))
            ) : (
                <p>Keine Informationen verfügbar.</p>  // Fallback-Nachricht
            )}
        </div>
    );
}
