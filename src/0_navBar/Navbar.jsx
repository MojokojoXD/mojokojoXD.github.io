import NavMenu from "./NavMenu";
import SlideBar from "./SlideBar";
import {useState, useEffect} from 'react';

export default function Navbar({scrolled,getSlide,setScroll}){
    const [toggleSlide, setToggleSlide] = useState(false);
    let overlay = 'overlay';
    let navBar = 'nav-bar'
    if(toggleSlide){
      overlay += ' extend';
      navBar += ' transition';
    }
    
    useEffect(()=> {
      getSlide(toggleSlide);
    },[toggleSlide,getSlide])
    
    return (
      <nav className={navBar} style={scrolled ?navStyle : null}>
        <div className="nav-div" >
          <h1>
            Welcome<span>.</span>
          </h1>
        </div>
        <div className="nav-div">
          <NavMenu getToggle={setToggleSlide} />
          <button className="nav-contact" onClick={()=> setScroll('CONTACTS')}>Contact</button>
        </div>
        <SlideBar toggleSlide={toggleSlide} setToggleSlide={setToggleSlide} />
        <div className={overlay}></div>
      </nav>
    );
}


const navStyle = {
  backgroundColor: "rgb(38,1,1,0.9)",
  boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
};

