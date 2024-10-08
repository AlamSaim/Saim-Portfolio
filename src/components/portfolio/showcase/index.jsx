import React from "react";
import "./style.scss";
import Arrow from "../../shared/arrow";

const Showcase = ({ data, transition }) => {
    return (
        <div className="projects-showcase">
            {data.map((project) => (
                <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div
                        key={project.name}
                        className={`showcase-item ${
                            transition === "zoomout"
                                ? "zoomOut"
                                : transition === "zoomin"
                                ? "zoomIn"
                                : ""
                        } `}
                    >
                        <div className="meta-content">
                            <h3>{project.name}</h3>
                            <div className="go-to-cta">
                                <span className="text">Project Details</span>
                                <Arrow />
                            </div>
                        </div>

                        <img
                            src={project.media.thumbnail}
                            alt="thumbnail"
                        />
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Showcase;
