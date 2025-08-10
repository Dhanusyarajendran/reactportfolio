import react from 'react';
import Tab from '../Tabcontent/Tab.jsx';
import '../About/About.css';
import aboutimage from '../../assets/aboutimage.png'


const About = () =>{

    return(
        
           <div className='container-fluid' id='About'>
            <div className='about-section'>
                <div className='about-image'>
                     <img src={aboutimage}  style={{width:"70vh", height:"90vh", borderRadius:"6px"}}alt='about-image'></img>
                 </div>

               <div className='about-content'>
                 <h2 className='mb-2'>About me</h2>
                 <p className='mb-4'> I’m a passionate Web Developer with over 1 year of internship experience at Zethic Technologies, Bangalore, where I contributed 
                    to live projects using modern web technologies. I also have 4 months of professional experience in WordPress development, 
                    focusing on plugin integration and performance optimization. I specialize in creating responsive, user-friendly, 
                    and SEO-optimized websites. </p>
                    <Tab />
               </div>

        </div>
            </div>

    );
    } 
export default About;