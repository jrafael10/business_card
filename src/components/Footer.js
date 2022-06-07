import React from "react";
import fbIcon from "../images/fb-icon.png"
import twitter from "../images/twitter-icon.png"
import github from "../images/github-icon.png"
import insta from "../images/insta-icon.png"

export default function Footer ()
{
    return (
       
           
            <div className="card-footer text-muted">
               <img className="twitter-icon" src={twitter} alt="linkedin"/>
               <img className="fb-icon" src={fbIcon} alt="linkedin"/>
               <img className="insta-icon" src={insta} alt="linkedin"/>
               <img className="github-icon" src={github} alt="linkedin"/>

            </div>
        
    )
}
