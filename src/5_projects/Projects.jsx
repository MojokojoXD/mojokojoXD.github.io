import {useRef,useEffect} from 'react';
import Carousel, {CarouselItems} from './Carousel';
import React from 'react';

export default function Projects({scroll,setScroll}){
    const projectsRef = useRef(null);

    useEffect(()=>{

        if(scroll === "PROJECTS"){
        projectsRef.current.scrollIntoView({behavior:'smooth'});
        setScroll('');
    }
    },[scroll,setScroll])

    return (
      <section ref={projectsRef} id="projects">
        <div className="projects-tag">
          <h6>PROJECTS</h6>
          <h2>Things I have done</h2>
        </div>
        <Carousel>
          <CarouselItems>
            <div className="project">
              <div className="project-iframe">
                <h1>Under constructor</h1>
              </div>
              <div className="project-desc">
                <h3>Description</h3>
              </div>
            </div>
          </CarouselItems>
          <CarouselItems>
            <div className="project">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/2GI73k07Pzk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3>Description </h3>
              <p>A simple loan referral website.</p>
              <a
                href="https://github.com/MojokojoXD/capstone-1.git"
                target="_blank"
                rel="noreferrer"
              >
                Git repo
              </a>
              <a
                href="https://mojo-capstone.herokuapp.com"
                target="_blank"
                rel="noreferrer"
              >
                Hosted site
              </a>
              
            </div>
          </CarouselItems>
          <CarouselItems>
            <div className="project">
              <div className="project-iframe">
                <h1>Under constructor</h1>
              </div>
              <div className="project-desc">
                <h3>description</h3>
              </div>
            </div>
          </CarouselItems>
        </Carousel>
      </section>
    );
}