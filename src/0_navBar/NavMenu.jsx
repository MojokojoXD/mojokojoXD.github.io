// @ts-nocheck
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function NavMenu({getToggle}){

    function handleClick(){
        getToggle(true)
    }
    
    return (
      <div id="nav-menu">
        <button onClick={handleClick}>
          <FontAwesomeIcon style={barStyle} icon={faBars} />
        </button>
      </div>
    );
}


const barStyle={
    marginRight: '2px'
}