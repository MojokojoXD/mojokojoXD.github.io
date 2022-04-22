import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export default function ContactTabs({icon,children}){
    return(
        <div className="contact-tab">
            <div>
                <FontAwesomeIcon icon={icon}/>
            </div>
            <div>{children}</div>
        </div>
    )
}


export function SocialMediaTabs({siteRef,children}){
    return(
        <a href={siteRef} className='social-media-tab'>
            {React.cloneElement(children,{style: mediaStyle})}
        </a>
    )
}


const mediaStyle = {
  margin: "auto",
  color: "white",
  padding: "10px",
  fontSize: "calc(16px + 1vw)",
  background:
    "radial-gradient(circle at bottom center,#260101,#275950)",
  borderRadius: "10px",
  boxShadow: '0 10px 10px -5px rgba(0, 0, 0, 0.2)'
};