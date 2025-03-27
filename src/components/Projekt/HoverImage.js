import { useState } from "react";

export default function HoverImage({ staticSrc, gifSrc, link }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={link}
            className="col-md-6 text-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={isHovered ? gifSrc : staticSrc}
                alt="Projekt"
                className={`img-fluid rounded border-purple ${!isHovered ? "darken" : ""}`}
            />
        </a>
    );
}
