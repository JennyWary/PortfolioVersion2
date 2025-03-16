import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Info.css';

export default function Info({ info = [] }) {


    return (
        <div className="container info-container p-3">

            {info.length > 0 ? (
                info.map((item, index) => (
                    <div key={index} className="mb-3">
                        <div className="date fw-bold">{item.date}</div>
                        <div className="title h5">
                            <b>{item.title}</b>
                        </div>
                        <ul>
                            {item.details.map((detail, i) => (
                                <li key={i} className="mb-1">{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>Keine Informationen verfügbar.</p>  // Fallback-Nachricht
            )}

            {/*<div className="date fw-bold">{info.date}</div>*/}
            {/*<div className="title h5">*/}
            {/*    <b>{info.title}</b>*/}
            {/*</div>*/}
            {/*<ul>*/}
            {/*    {info.details.map((detail, index) => (*/}
            {/*        <li key={index} className="mb-1">{detail}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </div>
    );
}
