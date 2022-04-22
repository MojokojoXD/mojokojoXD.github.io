import { useRef,useEffect } from "react";
import ContactTabs,{SocialMediaTabs} from "./ContactTabs";
import {faEnvelope,faPhone,faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import {FaFacebookF,FaLinkedinIn,FaTwitter} from 'react-icons/fa';
import ContactForm from "./ContactForm";

export default function Contact({scroll,setScroll}){
    const contactRef = useRef(null);

    useEffect(()=>{
        if(scroll === 'CONTACTS'){
            contactRef.current.scrollIntoView({behavior:'smooth',block:'center'});
            setScroll('');
        }
    })


    return(
            <section ref={contactRef} id='contact'>
                <div className="main-contact-div">
                    <div className="contact-details"
                    >
                        <div>
                            <ContactTabs icon={faEnvelope}>
                                <p>kwadwoneer@gmail.com</p>
                            </ContactTabs>
                            <ContactTabs icon={faPhone}>
                                <p>347-863-7394</p>
                            </ContactTabs>
                            <ContactTabs icon={faLocationArrow}>
                                <p>Lehi, Utah</p>
                            </ContactTabs>
                        </div>
                        <div>
                            <SocialMediaTabs siteRef={'#'}>
                                <FaFacebookF/>
                            </SocialMediaTabs>
                            <SocialMediaTabs siteRef={'#'}>
                                <FaLinkedinIn/>
                            </SocialMediaTabs>
                            <SocialMediaTabs siteRef={'#'}>
                                <FaTwitter/>
                            </SocialMediaTabs>
                        </div>
                    </div>
                    <div className="contact-form">
                        <div>
                            <h6>Get in Touch</h6>
                            <p>Or you can fill out this form and I'll contact you.</p>
                        </div>
                        <div>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </section>
    )
}