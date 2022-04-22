import { useContext } from "react";
import { scrollContext } from "../App";

const navLinks =['HOME','ABOUT','SKILLS','PROJECTS','CONTACTS']

export default function NavLinks(){
    const setScroll = useContext(scrollContext)

    function clickHandler(event){
        setScroll(event.target.textContent);
    }

    return (
        navLinks.map(link => <button onClick={clickHandler} key={link}>{link}</button>)
    )
}

