import { Parallax } from "react-parallax";
import TypingEffect from "./TypingEffect";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ParallaxComponent.css';

export default function ParallaxComponent() {
    return (
        <Parallax className="parallax-window" bgImage="./image/laptop.jpg" strength={500}>
            <div className="text-container d-flex justify-content-center align-items-center text-center text-white" >
                <div className="text-bottom-left">
                    <h1 className="display-1">Hallo, Ich bin <br />
                        <strong className="image-name">Jennifer Bramadas</strong>
                    </h1>
                    <TypingEffect />
                </div>
            </div>
        </Parallax>
    );
}
