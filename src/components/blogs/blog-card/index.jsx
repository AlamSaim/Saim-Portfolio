import React from "react";
import Arrow from "../../shared/arrow";
import "./style.scss";

const BlogCard = ({ user, date, image, title, description, link }) => {
    return (
        <div
            className="blog-card"
            onClick={() => {
                window.open(link, "_blank");
            }}
        >
            <div className="image-section">
                <img
                    src={image}
                    alt={title}
                />
            </div>
            <div className="content-section">
                <div className="info-bar">
                    <div className="user-name"> By {user}</div>
                    <div className="posted-date">{date}</div>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="readmore-cta">
                    <span className="text">Read More</span>
                    <Arrow />
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
