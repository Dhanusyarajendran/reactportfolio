import React, { useState } from 'react';
import staticimg from "../../assets/static websites.jpg"
import staticnew from "../../assets/staticnew.jpg"
import webdevelopment from "../../assets/webdevelopment.jpeg"
import ecommerce from "../../assets/ecomimages.png"
import './work.css'





const  Work= ()=> {

  const [showFullCard, setShowFullCard]= useState(false); 

  const data = [
    {
      title:`STATIC WEBSITES`,
      Tools:`Tools: Wordpress,plugins,constom codes`,
      img: staticnew
    },

      {
      title:`WEB DEVELOPMENT`,
       Tools:`Tools: Html,Css,Bootstrap,javascript`,
      img: webdevelopment
    },

    {
      title:`DYNAMIC WEBSITES`,
      Tools:`Tools: Wordpress,plugins,constom codes`,
      img: staticimg
   
    },




    {
      title:`ECOMMERCE WEBSITES`,
       Tools:`Tools: Wordpress,plugins,constom codes`,
      img: ecommerce
    },


   

  ];



  const visiblecards = showFullCard ? data: data.slice(0,2);


  return (
    <div className='container-fluid ' style={{marginBottom:"80px"}} id="Project">
    <h1 className='text-center text-capitalize mb-5' style={{fontSize:"56px", fontWeight:600}}>Projects</h1>

    <div className='d-flex gap-4 justify-content-center flex-wrap' >
      {visiblecards.map (item =>( 
        <div className='project-card' key={item.title}>
          <img src={item.img} style={{width:"60vh", height:"45vh", borderRadius:"20px", objectFit:"cover",}}></img>
    <div className='project-title' style={{padding:"20px"}}>
      <h3>{item.title}</h3>
      <h4>{item.Tools}</h4>
      <p>{item.text}</p>

      </div>
      </div>
      ))}
    </div>
    

    {/* show full or show less */}

    {data.length > 2 && (
      <div className='text-center mb-5'>
      <div className='visiblebutton' style={{marginTop:"24px"}}>
      <button onClick={()=>setShowFullCard(!showFullCard)}> 
        {showFullCard? "Explore Less" : "Explore More"}
      </button>
      </div>
      </div>

    )}
    </div>
  )
}

export default Work;
