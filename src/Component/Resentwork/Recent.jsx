import react, { useState } from 'react';
import '../Resentwork/Recent.css'
import portfolio from '../../assets/portimg.jpg'
import blogimg from '../../assets/blogself.jpeg'
import ecom from '../../assets/ecom.jpg'



const ReadMoreBox = ({text}) => {
 const [showFull, setShowFull] = useState(false);

    return(
            <div className='map'>
                <p className= {showFull ? "text" : "clamp-text"}>{text}</p>
                <button className="recent-button"onClick={() =>setShowFull(!showFull)}>
                    {showFull? "Show Less" : "Show More"}
                </button>

            </div>
    );
}


const Recent = () =>{
const rework = [

    {
        img: portfolio,
        title:`PORTFOLIO`,
        des:`This is a responsive personal portfolio website developed using React, HTML, CSS, JavaScript, and Bootstrap. It is designed to present
         my skills, projects, and experience through a clean and modern user interface. The site features smooth navigation and interactive sections 
         like a project showcase and contact form. It ensures a seamless experience across all devices with mobile-friendly design and reusable 
         components.`,
        
    },

     {
        img: blogimg,
        title:`BLOG (Processing)`,
        des:`This dynamic blog website is developed using React, HTML, CSS, JavaScript, and Bootstrap to deliver content-rich pages with a clean 
        and modern layout. Blog posts are fetched from an external API, allowing for seamless content updates without modifying the codebase. 
        The interface supports category-based filtering and ensures a smooth reading experience across all devices.`,
        
    },

   


     {
        img: ecom,
        title:`ECOMMERCE (Processing)`,
        des:`This dynamic blog website is developed using React, HTML, CSS, JavaScript, and Bootstrap to deliver content-rich pages with a clean 
        and modern layout. Blog posts are fetched from an external API, allowing for seamless content updates without modifying the codebase. 
        The interface supports category-based filtering and ensures a smooth reading experience across all devices.`,
        
    },

    //   {
    //     img: blogimg,
    //     title:`BLOG (Processing)`,
    //     des:`This dynamic blog website is developed using React, HTML, CSS, JavaScript, and Bootstrap to deliver content-rich pages with a clean 
    //     and modern layout. Blog posts are fetched from an external API, allowing for seamless content updates without modifying the codebase. 
    //     The interface supports category-based filtering and ensures a smooth reading experience across all devices.`,
        
    // },

];

 return(
    <div className='container-fluid' id='Latest' style={{marginBottom:"120px"}}>
          <h2 className="text-center"style={{fontSize:"56px", fontWeight:600, textTransform:"capitalize"}}>Latest Work</h2>
          
          <p className='text-center mt-4 px-5 mb-5' style={{fontSize:"20px", lineHeight:1.5, color:" rgb(228, 210, 210);", marginBottom:"30px"  }}>I recently started learning React as part of my journey into front-end development. React’s simple yet powerful component structure has helped me understand how to build reusable and dynamic user interfaces. I've practiced using JSX, props, and state while building beginner-level projects such as a personal portfolio, responsive cards, and a basic blog. Each day brings new learning opportunities, from working with APIs to handling navigation using React Router. This ongoing experience is shaping my development skills and preparing me to build real-world web applications confidently.
</p>

       <div className='container-fluid gap-3 remove-display'> 
        {rework.map(item => (
            <div className='' key = {item.title} style={{marginTop:"20px", marginBottom:"20px",}}>
                <div className='card fade-in'>
                <img src={item.img} style={{ width:"55vh",height:"36vh"}}></img>
                <h3 style={{ fontSize:"26px", fontWeight:"500", textTransform:"capitalize"}}>{item.title}</h3>
                 <ReadMoreBox text={item.des} />
                </div>
           </div>
        ))}
       </div>

        
    </div>
 );

}

export default Recent; 

