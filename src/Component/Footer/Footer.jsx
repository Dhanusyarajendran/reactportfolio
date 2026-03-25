import React from "react";
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid" id="Footer">
            <footer className="text-center footer-text">
                © {new Date().getFullYear()} MySite. All rights reserved.
            </footer>
        </div>
    );
};

export default Footer;
