import react from "react";
import { useState } from "react";
import portfolio from "../../assets/portfoliologo.png";
import '../Header/Header.css'


const Header = () =>{

 const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


   const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

    return(
      <header>
        <nav className="navbar navbar-expand-lg my-3">
          <div className="container-fluid">
            
            <div className="logo">
               <img src={portfolio} className="logo-img" alt="logo"></img>
            </div>

         <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          
        
      
     {/* Desktop menu */}
    <ul className="navbar-nav ms-auto desktop-menu">
      <li className="nav-item"><a href="#Home" className="nav-link">Home</a></li>
      <li className="nav-item"><a href="#About" className="nav-link">About me</a></li>
      <li className="nav-item"><a href="#Service" className="nav-link">Services</a></li>
      <li className="nav-item"><a href="#Project" className="nav-link">Project</a></li>
      <li className="nav-item"><a href="#Latest" className="nav-link">Latest Work</a></li>
      <li className="nav-item"><a href="#Contact" className="nav-link"><button className="contact-button">Contact</button></a></li>
    </ul>

    {/* Mobile menu */}
    <div className={`flyout-menu ${isMobileMenuOpen ? "open" : ""}`}>
      <ul className="mobile-menu"><li className="nav-item"><a href="#Home" className="nav-link">Home</a></li>
      <li className="nav-item"><a href="#About" className="nav-link">About me</a></li>
      <li className="nav-item"><a href="#Service" className="nav-link">Services</a></li>
      <li className="nav-item"><a href="#Project" className="nav-link">Project</a></li>
      <li className="nav-item"><a href="#Latest" className="nav-link">Latest Work</a></li>
      <li className="nav-item"><a href="#Contact" className="nav-link"><button className="contact-button">Contact</button></a></li>
      </ul>
    </div>
  </div>

</nav>
</header>


    );
}

export default Header; 

