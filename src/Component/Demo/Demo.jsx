import React, { useState } from "react"; // ✅ Correct import
import '../Demo/Demo.css';
import webicon from "../../assets/webicon.png";
import wordpressicon from "../../assets/wordpressicon.png";
// import webicon from '../../assets/webicon.png';
// import wordpressicon from '../../assets/wordpressicon.png';



const ReadMoreBox = ({title,text,img}) => {
  const [showFullText, setShowFullText] = useState(false);

  return (

    <div className="box" id="Service">
      <h3>{title}</h3>
      <p className={showFullText ? "full-text" : "clamp-text"}>{text}</p>
      <button className = "recent-button" onClick={() => setShowFullText(!showFullText)}>
        {showFullText ? "Show Less.." : "Read More.."}
      </button>
    </div>

  );
}

  

  const value = () =>{
   const data = [
 
    {
  
      img: webicon,
     title: `web Development`,
     text: `Web Development is the process of creating functional, interactive websites using modern technologies like HTML, CSS, JavaScript, 
            and frameworks. It focuses on building fast, secure, and responsive websites that enhance user engagement and meet business goals.
            A well-developed site ensures smooth navigation and great performance across devices.`
  },

  {
    
    img: wordpressicon,
    title:`wordpress Development`,
    text:`WordPress Development involves building dynamic and responsive websites using the WordPress CMS. It includes theme customization, 
          plugin integration, and optimizing performance to deliver websites that are both powerful and easy to manage. Whether it's a 
          personal blog or a business site, WordPress offers flexibility and scalability for every project.`

  },



  ];

   return (
    <div className="container-fluid">
      <h2 className="service-content text-center mb-5">Services</h2>
   <div className="d-flex flex-column flex-md-row gap-5">

      {data.map((item, index) => (
        <ReadMoreBox key={index} img={item.img} title={item.title} text={item.text} ></ReadMoreBox>
      ))
      }

    </div>
</div>
    )


  };

export default value;  


