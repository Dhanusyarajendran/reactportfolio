import React, { useState } from "react";
import './Tab.css';

const Tab = () =>{
    const[activeTab, setActiveTab]=useState("Skills");
    return(
        <div className="container-fluid p-0 mb-2">
        <div className='tab'>
            <div className='tab-button' style={{display:"flex", gap:"18px", marginBottom:"30px"}}>
              <button className={'activeTab' === 'skills'? 'active':"" } onClick={()=> setActiveTab("Skills")}>Skills</button>
              <button className={'activeTab' === 'Experience'? 'active':""} onClick={ ()=> setActiveTab("Experience")}>Experience</button>
              <button className={'activeTab' === 'Education'? 'active':""} onClick={ ()=> setActiveTab("Education")}>Education</button>
            </div>

            
            
       <div className='tab-content'>
              {activeTab === "Skills" && 
                <div className="progress-bar ">
                    <h3 className="d-flex justify-content-start align-item-center m-0" style={{fontSize:"20px"}}>HTML/CSS</h3>
                   <div className="progress-fill" style={{ width: "80%" }}>85%</div>
                   <h3 className="d-flex justify-content-start align-item-center m-0"style={{fontSize:"20px"}}>BOOTSTRAP</h3>
                   <div className="progress-fill" style={{ width: "70%" }}>70%</div>
                   <h3 className="d-flex justify-content-start align-item-center m-0" style={{fontSize:"20px"}} >REACT JS</h3>
                   <div className="progress-fill" style={{ width: "70%" }}>70%</div>
                   <h3 className="d-flex justify-content-start align-item-center m-0" style={{fontSize:"20px"}} >JAVASCRIPT</h3>
                   <div className="progress-fill" style={{ width: "60%" }}>60%</div>
                   <h3 className="d-flex justify-content-start align-item-center m-0" style={{fontSize:"20px"}} >TAILWIND CSS</h3>
                   <div className="progress-fill" style={{ width: "60%" }}>60%</div>
                   <h3 className="d-flex justify-content-start align-item-center m-0" style={{fontSize:"20px"}} > WORDPRESS, SEO</h3>
                   <div className="progress-fill" style={{ width: "80%" }}>80%</div>
                   <h3 className="d-flex justify-content-start align-item-center m-0" style={{fontSize:"20px"}} >PYTHON</h3>
                   <div className="progress-fill" style={{ width: "40%" }}>40%</div>
                   <h3 className="d-flex justify-content-start align-item-center m-0" style={{fontSize:"20px"}} >SQL</h3>
                   <div className="progress-fill" style={{ width: "40%" }}>40%</div>
                 
                
      </div>
      }

        {activeTab === "Experience" &&     

            <div>
            <h2 style={{margin:"0px", fontSize:"20px", color:"#b54769", marginBottom:"4px",textTransform:"uppercase"}}>Web Developer Intern at Zethic Technologies,Bangalore(1 year)</h2>
                <p style={{margin:"0px"}}>During this internship, I created 5 more websites in wordpress and web development.created the websites mobile friendly and responsiveness</p>
                <p style={{margin:"0px 0px 22px 0px"}}>Tools: Wordpress, plugins, Seo, Html, Css, Javascript</p>
              
                <h2 style={{margin:"0px", fontSize:"20px", color:"#b54769", marginBottom:"4px",textTransform:"uppercase"}}>Wordpress Developer at Maaya Software Solutions, Namakkal (4 Month)</h2>
                <p style={{margin:"0px"}}>During this period, I created 2 more wordpress websites .</p>
                <p style={{margin:"0px 0px 12px 0px"}}>Tools: Wordpress, Seo, Html, Css, Javascript</p>
            </div>
        }


        {activeTab === "Education" && 
        <div className="Education-content">
            <h2 style={{textTransform:"uppercase"}}> M.Kumarasamy College Of Engineering, Karur (2021-2023) </h2>
            <p style={{margin:"0px 0px 12px 0px"}}>MCA Completed with 8.0 CGPA.</p>
            <h2 style={{textTransform:"uppercase"}}> Trinity College For Womens  Arts And Science,Namakkal (2018-2021)</h2>
            <p style={{margin:"0px 0px 12px 0px"}}>BCA Completed with 7.9 CGPA.</p>
            <h2 style={{textTransform:"uppercase"}}>G.Hr.Sec School,Palapatti</h2>
            <p style={{margin:"0px 0px 1px 0px"}}>12th Completed with 7.0 CGPA.(2017-2018)</p>
            <p style={{margin:"0px 0px 12px 0px"}} >10th Completed with 8.5 CGPA.(2015-2016)</p>
            
        </div>
        }
            </div>

        </div>
        </div>
    );
}

export default Tab;