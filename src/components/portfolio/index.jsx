import React, { useState } from "react";
import "./style.scss";
import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

const projectsData = [
    // {
    //     href: "https://www.gmail.com/",
    //     id: 1,
    //     name: "Healthy Food Restraunt",
    //     tags: ["web-app", "mobile-app"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/thumb-7.jpg"),
    //     },
    // },
    // {
    //     href: "https://www.youtube.com",
    //     id: 2,
    //     name: "Anna & Daniel",
    //     tags: ["web-page"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/thumb-2.jpg"),
    //     },
    // },
    // {
    //     href: "https://www.youtube.com",
    //     id: 3,
    //     name: "Web Design Landing Page",
    //     tags: ["web-page"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/thumb-8.jpg"),
    //     },
    // },
    // {
    //     href: "https://www.youtube.com",
    //     id: 4,
    //     name: "Business Analytics Web App",
    //     tags: ["web-app", "mobile-app"],
    //     media: {
    //         thumbnail: require("../../images/portfolio/thumb-1.jpg"),
    //     },
    // },
    {
        href: "https://github.com/AlamSaim/Youtube-clone-Project",
        id: 5,
        name: "Videify- Youtube clone app (Frontend Project)",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-6.jpg"),
        },
    },

    {
        href: "https://github.com/AlamSaim/nodehotels",
        id: 7,
        name: "Node hotels - Hotel management app (Backend Project)",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.jpg"),
        },
    },
    {
        href: "https://github.com/AlamSaim/Locks-Website",
        id: 6,
        name: "Telco Locks - locks showcase website (HTML, CSS)",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.jpg"),
        },
    },
    {
        id: 8,
        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.jpg"),
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);

    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Projects"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
