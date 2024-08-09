import React from "react";
import "./style.scss";
import CallToAction from "../../shared/CallToAction";
import { BsAwardFill } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { scrollToSection } from "../../utils/helpers";

import hand from "../../../images/hand.png";
import girl from "../../../images/girl.png";
const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img
                                    src={hand}
                                    alt="hand"
                                />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text"> Saim Alam</span>
                    </h1>
                    <p>
                        I am a passionate Software Development Engineer
                        specializing in the MERN stack. I create dynamic,
                        responsive, and user-friendly web applications. Explore
                        my projects to see how I leverage modern technologies to
                        bring ideas to life, and feel free to reach out for
                        collaboration opportunities. Let's build something
                        amazing together!
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
                        <div className="text">Best developer</div>
                    </div>

                    <div className="highlights vertical">
                        <div className="icon">
                            <BiCodeAlt />
                        </div>
                        <div className="text">
                            <span>efficient Coder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
