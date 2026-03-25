import React, { useState } from 'react';
import staticimg from "../../assets/static websites.jpg";
import staticnew from "../../assets/staticnew.jpg";
import webdevelopment from "../../assets/webdevelopment.jpeg";
import ecommerce from "../../assets/ecomimages.png";
import '../Ourworks/Work.css';

const Work = () => {
    const [showFullCard, setShowFullCard] = useState(false);

    const data = [
        {
            title: `STATIC WEBSITES`,
            Tools: `Tools: WordPress, plugins, custom codes`,
            img: staticnew,
        },
        {
            title: `WEB DEVELOPMENT`,
            Tools: `Tools: HTML, CSS, Bootstrap, JavaScript`,
            img: webdevelopment,
        },
        {
            title: `DYNAMIC WEBSITES`,
            Tools: `Tools: WordPress, plugins, custom codes`,
            img: staticimg,
        },
        {
            title: `ECOMMERCE WEBSITES`,
            Tools: `Tools: WordPress, plugins, custom codes`,
            img: ecommerce,
        },
    ];

    const visiblecards = showFullCard ? data : data.slice(0, 2);

    return (
        <div className='container-fluid' id="Project">
            <h2 className='text-center text-capitalize projects-title'>Projects</h2>

            <div className='projects-grid'>
                {visiblecards.map(item => (
                    <div className='project-card' key={item.title}>
                        <img src={item.img} className="project-img" alt={item.title} />
                        <div className='project-title'>
                            <h3>{item.title}</h3>
                            <h4>{item.Tools}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {data.length > 2 && (
                <div className='text-center' style={{ marginTop: "32px" }}>
                    <button className="explore-btn" onClick={() => setShowFullCard(!showFullCard)}>
                        {showFullCard ? "Explore Less" : "Explore More"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Work;
