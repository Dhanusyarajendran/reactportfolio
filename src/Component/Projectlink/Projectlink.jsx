import React, { useState } from "react"; // ✅ Correct import
import '../Projectlink/Projectlink.css';




const ReadMoreBox = ({title,text,tools,url}) => {
  const [showFullText, setShowFullText] = useState(false);

  return (
  
<div className="box-design">
    <div className="box-box">
      <h3>{title}</h3> 
      <h4>{tools}</h4>
      <a href="">{url}</a>
      <p className={showFullText ? "full-text" : "clamp-text"}>{text}</p>
      <button className = "contact-button" onClick={() => setShowFullText(!showFullText)}>
        {showFullText ? "Show Less.." : "Read More.."}
      </button>
    </div>
</div>
  );
}

  

  const value = () =>{
   const data = [
 
    {
  
     title: `Static (Wordpress)`,
     tools: `Tools:  Elementor PageBuilder, Plugins, Figma, HTML5, CSS3, Seo`,
     url:'Live url:  dealwise.zethic.xyz,  poultrytect.org',
     text: `Overview:  I designed and developed a fully responsive WordPress website from scratch, converting a high-fidelity Figma design 
     into a functional, optimized, and user-friendly web experience. The website was built using Elementor, various essential 
     WordPress plugins, and custom CSS for enhanced styling and responsiveness.`
  },

  {
    
   title: `Static (Web development)`,
     tools: `Tools:  HTML5, CSS3, Bootstrap, Javascript`,
     url:'Live url: Krazeal.com',
     text: `Overview:  I used to create static websites using HTML, CSS, and JavaScript.
To make the websites responsive, I used frameworks like Bootstrap.
This ensured that the layout adjusted smoothly on all screen sizes.
The design remained clean, user-friendly, and mobile-compatible.`

  },

  {
    
     title: `Dynamic (Wordpress)`,
     tools: `Tools:  Elementor PageBuilder and pro, Plugins, Figma, HTML5, CSS3, Seo, `,
     url:'Live url:  akoi.in',
     text: `Designed and developed a responsive WordPress site based on a Figma design using Elementor, essential plugins, and custom CSS.
Implemented a dynamic layout utilizing Elementor’s loop grid feature to automatically display blog posts or products in a clean, organized manner.
This approach ensures consistency in design while allowing the site content to update seamlessly without manual intervention.
The dynamic grid supports easy content management, enabling users to add, edit, or remove posts with instant reflection on the frontend.`
  },

  {
    

     title: `E-commerce (Wordpress)`,
     tools: `Tools:  Elementor PageBuilder and pro, Plugins, Figma, HTML5, CSS3, Seo`,
     url:'Live url:  coral.zethic.xyz',
     text: `Overview:  I designed and developed a fully responsive eCommerce WordPress website from scratch, starting with a high-fidelity Figma design and transforming it into a visually appealing, optimized, and user-friendly online store. The website was built using Elementor, essential WordPress plugins, and custom CSS to enhance styling, layout flexibility, and responsiveness.
I created the entire eCommerce structure from the ground up, including product pages, category layouts, and a dynamic product display using Elementor's loop grid.`

  },



  ];

   return (
    <div className="container-fluid ">
      <h2 className="text-center mb-5" style={{fontSize:"56px", fontWeight:"600", textTransform:"capitalize"}}>Project OverView</h2>
      <div className="card-design" style={{marginBottom:"80px"}}>
      {data.map((item, index) => (
        <ReadMoreBox key={index}  title={item.title} tools={item.tools} text={item.text} url={item.url}></ReadMoreBox>
      ))
      }

    </div>
</div>
    )


  };

export default value;  


