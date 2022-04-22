
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileCode, faBorderTopLeft,faScrewdriverWrench, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useRef,useEffect } from "react";

export default function Skills({scroll,setScroll}){
    let skillClass = 'skill-set'; //class for styling skill divs
    const skillsRef = useRef(null);

    useEffect(()=>{
        if (scroll === "SKILLS") {
          skillsRef.current.scrollIntoView({behavior:'smooth',block:'center'});
          setScroll('');
        }
    },[scroll,setScroll])

    return (
            <section ref={skillsRef} id='skills'>
                <div className={skillClass}>
                    <h2>Skillset</h2>
                    <br/>
                    <p>With skills in both frontend and backend design, I am the best person to hire when it comes to designing and building your MERN applications.</p>
                </div>
                <div className={skillClass}>
                    <FontAwesomeIcon icon={faFileCode} style={iconStyle}/>
                    <h3>Languages</h3>
                    <br/>
                    <p>I got my start using <strong>C++</strong> making basic C programs. I still remember the first Hello world 'cout' I typed. Currently, I do everything in <strong>Javascript</strong> and <strong>HTML</strong>.</p>
                </div>
                <div className={skillClass}>
                    <FontAwesomeIcon icon={faBorderTopLeft} style={iconStyle} />
                    <h3>Styling</h3><br/>
                    <p>For my styling needs,I create wireframes with figma. My style sheets are governed by <strong>CSS</strong> and for those large projects I use <strong>SASS</strong>.</p>

                </div>
                <div className={skillClass}>
                    <FontAwesomeIcon icon={faScrewdriverWrench} style={iconStyle}/>
                    <h3>Tools</h3><br/>
                    <p>I use <strong>Git</strong> and <strong>Github</strong> for my codebase management. I've also used several editors over the years but now I'm comfortable with vscode</p>
                </div>
                <div className={skillClass}>
                    <FontAwesomeIcon icon={faBriefcase} style={iconStyle}/>
                    <h3>Misc</h3>
                    <br/>
                    <p>I'd like to highlight other things in my trade that would be to your benefit. <strong>React</strong> is my official frontend library, and for backend/serverside work I use <strong>Express</strong> and <strong>node</strong>. Finally, when it comes to databases, <strong>SQL</strong> and <strong>postgres</strong> are my choices.</p>
                </div>
            </section>
    )
}


const iconStyle = {
  color: "#260101",
  fontSize: "1.5em",
  marginBottom: "20px",
};