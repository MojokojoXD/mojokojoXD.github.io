import { useRef,useEffect } from 'react';

export default function Home({scroll,setScroll}) {
    const homeRef = useRef(null);
    
    useEffect(()=>{
      if (scroll === 'HOME'){
          homeRef.current.scrollIntoView({behavior:'smooth'});
          setScroll('')
      }
    },[scroll,setScroll])


  return (
    <section ref={homeRef} id="home">

      <div id="tags">
        <div>
            <h1>Hi, I'm Kojo</h1>
            <p>Web developer,engineer and gamer.</p>
        </div>
        
      </div>
    </section>
  );
}




