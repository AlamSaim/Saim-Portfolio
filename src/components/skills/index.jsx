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
                    <ul>
                        <li>
                            Languages: HTML5, CSS3, JavaScript (ES6+),
                            TypeScript
                        </li>
                        <br />
                        <li>
                            Frameworks & Libraries: React.js, Redux Toolkit,
                            Tailwind CSS, Bootstrap
                        </li>
                        <br />
                        <li>
                            Tools & Platforms: Git, GitHub, Vercel, Netlify,
                            npm, Webpack, Postman
                        </li>
                        <br />
                        <li> Form Handling: React Hook Form, Yup, Formik</li>
                        <br />
                        <li>
                            State Management: Redux, Context API API
                            Integration: RESTful APIs, Axios, Fetch{" "}
                        </li>
                        <br />
                        <li>
                            Others: Responsive Design, Figma to Code,
                            Mobile-First Design, SEO Basics, Chart Libraries
                            (Recharts)
                        </li>
                    </ul>
                    <br />
                    {/* <p>
                        Languages: HTML5, CSS3, JavaScript (ES6+), TypeScript{" "}
                        <br />
                        <br />
                        Frameworks & Libraries: React.js, Redux Toolkit,
                        Tailwind CSS, Bootstrap <br />
                        <br />
                        Tools & Platforms: Git, GitHub, Vercel, Netlify, npm,
                        Webpack, Postman <br />
                        <br />
                        Form Handling: React Hook Form, Yup, Formik <br />
                        <br />
                        State Management: Redux, Context API <br /> <br />
                        API Integration: RESTful APIs, Axios, Fetch <br />
                        <br /> Others: Responsive Design, Figma to Code,
                        Mobile-First Design, SEO Basics, Chart Libraries
                        (Recharts)
                    </p> */}
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
