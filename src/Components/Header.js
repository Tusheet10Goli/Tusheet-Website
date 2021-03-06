import React, {Component} from "react";
import ActiveMenuLink from "active-menu-link";

export default class Header extends Component {
   render () {
       let resumeData = this.props.resumeData;
       function handleCurrent(e) {
           document.getElementsByClassName("current")[0].className = "";
           e.target.className = "current";
       }
       return (
         <React.Fragment>
             <header id={"home"}>
                 <nav id={"nav-wrap"}>
                     <a className={"mobile-btn"} href={"#nav-wrap"} title={"Show menu"}>Show menu</a>
                     <a className={"mobile-btn"} href={"#"} title={"Hide menu"}>Hide menu</a>
                     <ul id={"nav"} className={"nav"}>
                         <li onClick={handleCurrent}><a className={"current"} href={"#home"}>Home</a></li>
                         <li onClick={handleCurrent}><a href={"#about"}>About Me</a></li>
                         <li onClick={handleCurrent}><a href={"#skills"}>Skills</a></li>
                         <li onClick={handleCurrent}><a href={"#work"}>Work Experience</a></li>
                         <li onClick={handleCurrent}><a href={"#projects"}>Projects</a></li>
                         <li onClick={handleCurrent}><a href={"#timeline"}>Timeline</a></li>
                         <li onClick={handleCurrent}><a href={"#contact"}>Contact Me</a></li>
                         <a id={"res_down"} style={{paddingLeft: '10px'}} href={"https://drive.google.com/file/d/1IXpw1MhBltWW2EXNxanU9TJHK9Pl2MeC/view?usp=sharing"} target={"_blank"}>Download Resume <i className={"fas fa-download"}/></a>
                     </ul>
                 </nav>
                 <div className={"row banner"}>
                     <div className={"banner-text"}>
                         <h1 className={"responsive-headline"}>
                             I am {resumeData.name}.
                         </h1>
                         <h3 style={{color:"white", fontFamily:"sans-serif"}}>{resumeData.role}</h3>
                         <hr/>
                         <ul className={"social"}>
                             {
                                 resumeData.socials  && resumeData.socials.map(item => {
                                     return (
                                         <li key={item.name}>
                                             <a href={item.url} target={"_blank"}><i className={item.className}/></a>
                                         </li>
                                     )
                                 })
                             }
                         </ul>
                     </div>
                 </div>
                 <p className="scrolldown">
                     <a href="#about"><i className="icon-down-circle"></i></a>
                </p>
             </header>
         </React.Fragment>
       );
   }
}
