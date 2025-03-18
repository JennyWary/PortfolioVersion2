import { Parallax } from "react-parallax";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/SmallParallax.css';

export default function SmallParallax({ image }) {
    return (
        <Parallax className="parallax-window" bgImage={image} strength={500}>
        </Parallax>
    );
}
