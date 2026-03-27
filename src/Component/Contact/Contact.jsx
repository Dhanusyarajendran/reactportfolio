import React from 'react';
import '../Contact/Contact.css';
import github from '../../assets/git.png';
import linkedin from '../../assets/linkedin.png';

const Contact = () => {
    return (
        <div className='container-fluid' id='Contact'>
            <div className='text-center contact-box' data-aos="fade-up">
                <h2 className="contact-title">Contact</h2>
                <h3 className="contact-subtitle">Let's be awesome together!</h3>

                <p className="contact-desc">
                    As a dev, I am driven by my love for coding and my desire for new challenges.
                    If you have opportunities for collaboration or want to build something amazing, don't hesitate to contact me!
                </p>

                <div className='contact-icons'>
                    <a href='https://www.linkedin.com/in/r-dhanushya' target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} className="contact-icon" alt="LinkedIn" />
                    </a>
                    <a href='https://github.com/Dhanusyarajendran' target="_blank" rel="noopener noreferrer">
                        <img src={github} className="contact-icon" alt="GitHub" />
                    </a>
                </div>

                <a href="mailto:dhanushyakrithika@gmail.com">
                    <button className='contact-button'>Get in Touch!</button>
                </a>
            </div>
        </div>
    );
};

export default Contact;
