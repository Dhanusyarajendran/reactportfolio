import React from 'react';
import '../Contact/Contact.css';
import github from '../../assets/git.png';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';

const Contact = () => {
    return (
        <div className='container-fluid mt-5' style={{ marginBottom: "120px" }} id='Contact'>
            <div className='text-center py-5 contact-box'>
                <h2 className="text-center mb-1" style={{ fontSize: "52px", fontWeight: 600, textTransform: "capitalize" }}>
                    Contact
                </h2>

                <h3 className="text-center mb-3" style={{ fontSize: "46px", fontWeight: 500, textTransform: "capitalize" }}>
                    Let's be awesome together!
                </h3>

                <p className="text-center px-5" style={{ fontSize: "20px", fontWeight: "100", lineHeight: "1.5", color: "#e4d2d2ff" }}>
                    As a dev, I am driven by my love for coding and my desire for new challenges.
                    If you have opportunities for collaboration or want to build something amazing, don't hesitate to contact me!
                </p>

                <div className='pb-4'>
                    <a href='https://www.linkedin.com/in/r-dhanushya' target="_blank" rel="noopener noreferrer">
                        <img
                            src={linkedin}
                            style={{ width: "7.5vh", height: "7.5vh", cursor: "pointer", marginTop: "4px" }}
                            alt="LinkedIn"
                        />
                    </a>

                    {/* <a href='https://wa.me/yourwhatsapplink' target="_blank" rel="noopener noreferrer">
                        <img
                            src={whatsapp}
                            style={{ width: "8.5vh", height: "8.5vh", cursor: "pointer" }}
                            alt="WhatsApp"
                        />
                    </a> */}
                    <a href='https://github.com/Dhanusyarajendran' target="_blank" rel="noopener noreferrer">
                        <img
                            src={github}
                            style={{ width: "6vh", height: "6vh", cursor: "pointer" }}
                            alt="GitHub"
                        />
                    </a>
                </div>

                <a href="mailto:dhanushyakrithika@gmail.com">
                    <button className='contact-button'>Get in Touch!</button>
                </a>
            </div>
        </div>
    );
}

export default Contact;
