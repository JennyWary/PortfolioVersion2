import github from "./image/social/github.png";
import linkedin from "./image/social/linkedin.png";
import "./css/Social.css";

const FixedSocialIcons = () => {
    return (
        <div className="fixed-icons">
            <a href="https://www.linkedin.com/in/jennifer-b-0a6566157/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="icon linkedin"/>
            </a>

            <a href="https://github.com/JennyWary" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="icon github"/>
            </a>
            <div className="separator"></div>
        </div>
    );
};

export default FixedSocialIcons;
