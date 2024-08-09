import React from "react";
import "./style.scss";

import Section from "../shared/section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
import BlogCard from "./blog-card";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Saim Alam"
                    date="march 8 2022"
                    image={Blog1}
                    title=" How to Recover Deleted Messages from Instagram 2024"
                    description="Instagram retains specific user data on its servers, offering the convenience of retrieving "
                    link="https://techunfold.in/instagram-how-to-recover-deleted-messages-2024/"
                />
                <BlogCard
                    user="Saim Alam"
                    date="march 8 2022"
                    image={Blog2}
                    title=" Is it safe to buy iPhone from Flipkart and Amazon?
"
                    description="Whenever any new iPhone comes on the market, we want to buy it as soon as possible. We are all waiting for the brand-new iPhone to be in our hands."
                    link="https://techunfold.in/is-it-safe-to-buy-iphone-from-flipkart-and-amazon/"
                />
                <BlogCard
                    user="Saim Alam"
                    date="march 8 2022"
                    image={Blog3}
                    title=" Is it safe to remove Antivirus software from your computer?"
                    description="Anti-virus is a security program that is designed to remove viruses, malware, networking issues, security packages, ransomware, and many other things"
                    link="https://techunfold.in/is-it-safe-to-remove-antivirus-software-from-your-computer/"
                />
            </div>
        </Section>
    );
};

export default Blogs;
