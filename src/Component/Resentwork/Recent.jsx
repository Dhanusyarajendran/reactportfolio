import react, { useState } from 'react';
import '../Resentwork/Recent.css';
import portfolio from '../../assets/portimg.jpg';
import blogimg from '../../assets/blogself.jpeg';
import ecom from '../../assets/ecom.jpg';

const ReadMoreBox = ({ text }) => {
    const [showFull, setShowFull] = useState(false);
    return (
        <div className='map'>
            <p className={showFull ? "text" : "clamp-text"}>{text}</p>
            <button className="recent-button" onClick={() => setShowFull(!showFull)}>
                {showFull ? "Show Less" : "Show More"}
            </button>
        </div>
    );
};

const Recent = () => {
    const rework = [
        {
            img: portfolio,
            title: `PORTFOLIO`,
            des: `This is a responsive personal portfolio website developed using React, HTML, CSS, JavaScript, and Bootstrap. It is designed to present
            my skills, projects, and experience through a clean and modern user interface. The site features smooth navigation and interactive sections
            like a project showcase and contact form. It ensures a seamless experience across all devices with mobile-friendly design and reusable components.`,
        },
        {
            img: blogimg,
            title: `BLOG (Processing)`,
            des: `This dynamic blog website is developed using React, HTML, CSS, JavaScript, and Bootstrap to deliver content-rich pages with a clean
            and modern layout. Blog posts are fetched from an external API, allowing for seamless content updates without modifying the codebase.
            The interface supports category-based filtering and ensures a smooth reading experience across all devices.`,
        },
        {
            img: ecom,
            title: `ECOMMERCE (Processing)`,
            des: `This e-commerce project is developed using React, HTML, CSS, JavaScript, and Bootstrap to deliver a product listing experience.
            It includes dynamic product cards, category filtering, and a cart system. The design is fully responsive and optimized for all screen sizes.`,
        },
    ];

    return (
        <div className='container-fluid' id='Latest'>
            <h2 className="text-center section-title" data-aos="fade-up">Latest Work</h2>
            <p className='text-center section-subtitle' data-aos="fade-up" data-aos-delay="100">
                I recently started learning React as part of my journey into front-end development. React's simple yet powerful component structure
                has helped me understand how to build reusable and dynamic user interfaces. I've practiced using JSX, props, and state while building
                beginner-level projects such as a personal portfolio, responsive cards, and a basic blog.
            </p>

            <div className='remove-display'>
                {rework.map((item, i) => (
                    <div key={item.title} data-aos="fade-up" data-aos-delay={i * 100}>
                        <div className='card fade-in'>
                            <img src={item.img} className="recent-img" alt={item.title} />
                            <h3 className="card-title">{item.title}</h3>
                            <ReadMoreBox text={item.des} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recent;
