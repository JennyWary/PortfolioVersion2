import { useEffect, useState } from "react";
import './css/ParallaxComponent.css';

const words = ["WEB-DEVELOPER", "FRONTEND-DEVELOPER", "BACKEND-DEVELOPER", "FULLSTACK-DEVELOPER"];
const typingSpeed = 200;
const deletingSpeed = 100;
const delayBetweenWords = 1500;

export default function TypingEffect() {
    const [text, setText] = useState("");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting && currentCharIndex < words[currentWordIndex].length) {
                setText((prev) => prev + words[currentWordIndex].charAt(currentCharIndex));
                setCurrentCharIndex((prev) => prev + 1);
            } else if (!isDeleting && currentCharIndex === words[currentWordIndex].length) {
                setTimeout(() => setIsDeleting(true), delayBetweenWords);
            } else if (isDeleting && currentCharIndex > 0) {
                setText((prev) => prev.slice(0, -1));
                setCurrentCharIndex((prev) => prev - 1);
            } else if (isDeleting && currentCharIndex === 0) {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout);
    }, [text, currentCharIndex, isDeleting, currentWordIndex]);

    return (
        <div className="typewriter" id="typewriter">
            <span id="text">{text}</span>
            <span className="cursor">|</span>
        </div>
    );
}
