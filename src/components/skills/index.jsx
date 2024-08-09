import React from "react";
import "./style.scss";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import Section from "../shared/section";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Resume from "../../download/Resume.pdf";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="HTML , Js, React, CSS"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        I specialize in the MERN stack, leveraging MongoDB,
                        Express.js, React, and Node.js to develop full-stack
                        applications. My expertise includes creating dynamic,
                        responsive user interfaces with React, managing
                        server-side logic with Express.js and Node.js, and
                        ensuring data integrity and scalability with MongoDB.
                        This combination of front-end and back-end skills allows
                        me to build seamless and efficient web applications.
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
