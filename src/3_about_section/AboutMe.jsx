import avatar from '../images/avataaars.png'
import { useRef,useEffect } from 'react';

export default function Aboutme({scroll,setScroll}){
    const aboutRef=useRef(null);
    useEffect(()=>{
      if(scroll==='ABOUT'){
        aboutRef.current.scrollIntoView({behavior:'smooth'});
        setScroll('');
      }
    },[scroll,setScroll])
  


    return (
      <section ref={aboutRef} className="about-me">
        <div className="about-me-divs">
          <div id="self-portrait">
            <img src={avatar} alt="my avatar" />
          </div>
        </div>
        <div className="about-me-divs">
          <div id="about-me-summary">
            <h6>ABOUT ME</h6>
            <h2>Who am I?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              modi blanditiis iure.
            </p>
          </div>
        </div>
      </section>
    );
}


