// @ts-nocheck
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";
import me from '../images/me.jpg'

export default function SlideBar({toggleSlide,setToggleSlide}){
    let classN = 'slide-bar';
    if(toggleSlide){classN += ' slide-transition';}

    function handleClick(){
        setToggleSlide(false)
    }

    return (
      <section className={classN}>
        <div>
            <img
            className="image"
            src={me}
            alt="mountains"
            />
        </div>
        <div className="slide-links">
          <div className="X-div">
            <FontAwesomeIcon
              onClick={handleClick}
              icon={faRectangleXmark}
              className="close"
            />
          </div>

          <div className="nav-links">
            <NavLinks />
          </div>
        </div>
      </section>
    );
}

