import React from "react";
import "./style.scss";
import CallToAction from "../../shared/CallToAction";
import { BsAwardFill } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { scrollToSection } from "../../utils/helpers";

import girl from "../../../images/girl.png";
const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            {/* <span className="text">Hello</span>
                            <span className="icon">
                                <img
                                    src={hand}
                                    alt="hand"
                                />
                            </span> */}
                            {/* <span className="text">, I Am</span> */}
                        </span>
                        <span className="big-text">Hello, I am </span>
                        <span className="big-text">Saim Alam</span>
                    </h1>
                    <p>
                        A Self-motivated React Developer with hands-on
                        experience in building modern, responsive web apps.
                        Proficient in React.js, ContextAPI, Redux, Tailwind CSS,
                        Bootstrap, and real-world tools like Recharts, EmailJS,
                        and React Hook Form. Focused on performance, UI/UX, and
                        delivering pixel-perfect frontends.
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => scrollToSection("contact")}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="pic"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Full Stack Alchemist</div>
                    </div>

                    <div className="highlights vertical">
                        <div className="icon">
                            <BiCodeAlt />
                        </div>
                        <div className="text">
                            <span>✨React Wizard</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
