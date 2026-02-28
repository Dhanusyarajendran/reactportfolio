import React from "react";
import '../Service/Service.css'
import webicon from "../../assets/webicon.png";
import wordpressicon from "../../assets/wordpressicon.png"

const Services = () =>
{
    return(

        <div className="container-fluid">
            <h2 className="text-center mb-5 service-title">My Services</h2>

        <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
            <div className="card-content">
                <img src={webicon} style={{width:"20%",height:"20%", alignItems:"center", filter:"brightness(0) invert(0.95) contrast(0.9)"}}></img>
                <h3 >Web Development</h3>
                 <p>Web Development is the process of creating functional, interactive websites using modern technologies like HTML, CSS, JavaScript, 
                    and frameworks. It focuses on building fast, secure, and responsive websites that enhance user engagement and meet business goals.
                     A well-developed site ensures smooth navigation and great performance across devices.....</p>
            </div>
            </div>


             <div className="col-12 col-md-6 col-lg-4">
             <div className="card-content">
                <img src={wordpressicon} style={{width:"20%",height:"20%", alignItems:"center", filter:"brightness(0) invert(0.95) contrast(0.9)"}}></img>
                <h3>Wordpress Development</h3>
                 <p>WordPress Development involves building dynamic and responsive websites using the WordPress CMS. It includes theme customization, 
                    plugin integration, and optimizing performance to deliver websites that are both powerful and easy to manage. Whether it's a 
                    personal blog or a business site, WordPress offers flexibility and scalability for every project......</p>
            </div>  
            </div>


              <div className="col-12 col-md-6 col-lg-4">
             <div className="card-content">
                <img src={webicon} style={{width:"20%",height:"20%", alignItems:"center", filter:"brightness(0) invert(0.95) contrast(0.9)"}}></img>
                <h3>Web Design</h3>
                 <p>WordPress Development involves building dynamic and responsive websites using the WordPress CMS. It includes theme customization, 
                    plugin integration, and optimizing performance to deliver websites that are both powerful and easy to manage. Whether it's a 
                    personal blog or a business site, WordPress offers flexibility and scalability for every project......</p>
            </div>    
          </div>



        </div>
        </div>

    );
}

export default Services;

