import React from "react";
import linkedinPhoto from "../images/ryzlynn.jpeg"
import emailIcon from "../images/Icon.png";
import linkedinLogo from "../images/linkedin.png";


export default function Info()
{
  

    return (
      <div className="info-section">
         <img className="card-img-top" src={linkedinPhoto} alt="Cardcap"></img>

        <h3 className="person-name">Ryzlynn Quirong</h3>
        <h4 className="position">Random and Quirky</h4>
        <h5 className="email">ryzlynnquirong@yahoo.com</h5>
       
       <div className="buttons-container">
     
      <a className="email-button" href="#"><img className="email-icon" src={emailIcon} alt="email"></img>Email</a>
        
        <a className="linkedin-button" href="#"><img className="linkedin-icon" src={linkedinLogo} alt="linkedin"></img>Linkedin</a>
     </div>
    </div>
   
    );
}