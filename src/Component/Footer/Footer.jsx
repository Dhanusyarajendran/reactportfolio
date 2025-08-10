import React from "react";

const footer = () =>
{
    return(
        <div className="container-fluid" id="Footer">
        <footer className="text-center" style={{fontSize:"20px", fontWeight:"100",lineHeight:"1.2", color:" rgb(228, 210, 210);",
    padding: "20px"}}>
               © {new Date().getFullYear()} MySite. All rights reserved.
        </footer>
        </div>
    );
} 

export default footer; 

