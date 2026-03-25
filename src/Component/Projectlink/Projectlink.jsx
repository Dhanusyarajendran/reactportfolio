import React, { useState } from "react";
import '../Projectlink/Projectlink.css';

const ReadMoreBox = ({ title, text, tools, url }) => {
    const [showFullText, setShowFullText] = useState(false);

    return (
        <div className="box-design">
            <div className="box-box">
                <h3>{title}</h3>
                <h4>{tools}</h4>
                <span className="project-url">{url}</span>
                <p className={showFullText ? "full-text" : "clamp-text"}>{text}</p>
                <button className="read-more-btn" onClick={() => setShowFullText(!showFullText)}>
                    {showFullText ? "Show Less" : "Read More"}
                </button>
            </div>
        </div>
    );
};

const ProjectOverview = () => {
    const data = [
        {
            title: `Static (WordPress)`,
            tools: `Tools: Elementor Page Builder, Plugins, Figma, HTML5, CSS3, SEO`,
            url: `Live URL: dealwise.zethic.xyz  |  poultrytect.org`,
            text: `I designed and developed a fully responsive WordPress website from scratch, converting a high-fidelity Figma design
            into a functional, optimized, and user-friendly web experience. The website was built using Elementor, various essential
            WordPress plugins, and custom CSS for enhanced styling and responsiveness.`,
        },
        {
            title: `Static (Web Development)`,
            tools: `Tools: HTML5, CSS3, Bootstrap, JavaScript`,
            url: `Live URL: Krazeal.com`,
            text: `I used to create static websites using HTML, CSS, and JavaScript. To make the websites responsive, I used frameworks
            like Bootstrap. This ensured that the layout adjusted smoothly on all screen sizes. The design remained clean, user-friendly,
            and mobile-compatible.`,
        },
        {
            title: `Dynamic (WordPress)`,
            tools: `Tools: Elementor Pro, Plugins, Figma, HTML5, CSS3, SEO`,
            url: `Live URL: akoi.in`,
            text: `Designed and developed a responsive WordPress site based on a Figma design using Elementor, essential plugins, and custom CSS.
            Implemented a dynamic layout utilizing Elementor's loop grid feature to automatically display blog posts or products in a clean,
            organized manner. This ensures consistency in design while allowing the site content to update seamlessly without manual intervention.`,
        },
        {
            title: `E-commerce (WordPress)`,
            tools: `Tools: Elementor Pro, Plugins, Figma, HTML5, CSS3, SEO`,
            url: `Live URL: coral.zethic.xyz`,
            text: `I designed and developed a fully responsive eCommerce WordPress website from scratch, starting with a high-fidelity Figma design
            and transforming it into a visually appealing, optimized, and user-friendly online store. Built using Elementor, essential WordPress
            plugins, and custom CSS to enhance styling, layout flexibility, and responsiveness. Includes product pages, category layouts, and
            a dynamic product display using Elementor's loop grid.`,
        },
    ];

    return (
        <div className="container-fluid projectlink-section">
            <h2 className="text-center projectlink-title">Project Overview</h2>
            <div className="card-design">
                {data.map((item, index) => (
                    <ReadMoreBox
                        key={index}
                        title={item.title}
                        tools={item.tools}
                        text={item.text}
                        url={item.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectOverview;
