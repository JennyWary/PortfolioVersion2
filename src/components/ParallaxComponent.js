import { Parallax } from "react-parallax";
import TypingEffect from "./TypingEffect";
import './css/ParallaxComponent.css';


export default function ParallaxComponent() {
    return (
        <Parallax className="parallax-window" bgImage="./image/laptop.jpg" strength={500}>
            <div id="image-text">
                Hallo, Ich bin <br />
                <div id="image-name">
                    <b>Jennifer Bramadas</b>
                </div>
                <TypingEffect />
            </div>
        </Parallax>
    );
}
