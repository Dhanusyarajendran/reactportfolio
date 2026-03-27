import React from "react";
import '../Service/Service.css';
import webicon from "../../assets/webicon.png";
import wordpressicon from "../../assets/wordpressicon.png";

const Services = () => {
    return (
        <div className="container-fluid" id="Services">
            <h2 className="text-center service-title" data-aos="fade-up">My Services</h2>

            <div className="row service-row">
                <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="0">
                    <div className="card-content">
                        <img src={webicon} className="service-icon" alt="web icon" />
                        <h3>Web Development</h3>
                        <p>Web Development is the process of creating functional, interactive websites using modern technologies like HTML, CSS, JavaScript,
                            and frameworks. It focuses on building fast, secure, and responsive websites that enhance user engagement and meet business goals.
                            A well-developed site ensures smooth navigation and great performance across devices.</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="card-content">
                        <img src={wordpressicon} className="service-icon" alt="wordpress icon" />
                        <h3>WordPress Development</h3>
                        <p>WordPress Development involves building dynamic and responsive websites using the WordPress CMS. It includes theme customization,
                            plugin integration, and optimizing performance to deliver websites that are both powerful and easy to manage. Whether it's a
                            personal blog or a business site, WordPress offers flexibility and scalability for every project.</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="card-content">
                        <img src={webicon} className="service-icon" alt="web design icon" />
                        <h3>Web Design</h3>
                        <p>Web Design focuses on creating visually appealing, user-friendly, and responsive interfaces. It includes layout planning,
                            color schemes, typography, and ensuring that every element provides the best user experience across all screen sizes and devices.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
