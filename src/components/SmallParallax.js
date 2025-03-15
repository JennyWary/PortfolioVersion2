import { Parallax } from "react-parallax";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/SmallParallax.css';

export default function SmallParallax() {
    return (
        <Parallax className="parallax-window" bgImage="./image/code.jpg" strength={500}>

        </Parallax>
    );
}
