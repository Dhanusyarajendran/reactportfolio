import react  from "react";
import portfolioimage from "../../assets/porthome.png";
import resume from '../../assets/Dhanusya_WebDeveloper_Resume.pdf';
import '../Home/Home.css';

const Home = () =>{
    return(
      
        <div className="container-fluid" id="Home">
        <div className="hero-section">
           <div className="hero-content">
           <h1 className="home-title">Hi, I am <span className="text-color">Dhanusya</span><br />
            Web Developer </h1>
            <h2> build responsive and interactive websites <br/> using modern web technologies.</h2>
         <a href={resume} download rel="noopener noreferrer">
  <button>Download Resume</button>
</a>

           </div>

           <div className="hero-image">
              <img src={portfolioimage}  alt="banner-image"></img>
           </div>
        </div>
       </div>
    )
}

export default Home; 

