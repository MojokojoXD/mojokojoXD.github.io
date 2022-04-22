import './App.css';
import Navbar from './0_navBar/Navbar';
import Home from './1_home/Home'; 
import AboutMe from './3_about_section/AboutMe';
import Skills from './4_skills/Skills'
import {useState,createContext} from 'react';
import { useScrollHandler } from './customHook/useScrollHandler';
import Projects from './5_projects/Projects';
import Contact from './6_contacts/Contact';

export const scrollContext = createContext();

function App() { 
  const [sectionScroll,setSectionScroll] = useState('');
  const [slideToggled, setSlideToggled]=useState('');
  const scrolled = useScrollHandler();
  let mainBody = 'main-body';
  if(slideToggled)mainBody += ' main-body-transition'
  
  function setSectionScrollf(location){
    setSectionScroll(location);
  }

  function getToggleSlide(slideOut){
    setSlideToggled(slideOut)
  }

  
  return (
    <scrollContext.Provider value={setSectionScrollf}>
      <div className="App">
        <Navbar scrolled={scrolled} getSlide={getToggleSlide} setScroll={setSectionScrollf}/>
        <section className={mainBody}>
          <Home scroll={sectionScroll}  setScroll={setSectionScrollf}/>
          <AboutMe scroll={sectionScroll}  setScroll={setSectionScrollf}/>
          <Skills scroll={sectionScroll} setScroll={setSectionScrollf}/>
          <Projects scroll={sectionScroll} setScroll={setSectionScrollf}/>
          <Contact scroll={sectionScroll}
          setScroll={setSectionScrollf}/>
        </section>
      </div>
    </scrollContext.Provider>
  );
}

export default App;


