import React from "react";
import $ from 'jquery';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import "../css/projslider.css";

function Projects({resumeData}) {
    React.useEffect(() => {
        const window_width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        if(window_width > 920) {
            let slideEl = $(".slide--proj");
            let flickity = new Flickity('.slide--proj', {
                imagesLoaded: true,
                wrapAround: true,
                // autoPlay: true,
                adaptiveHeight : true
            });
        } else { }
    }, []);
    return (
        <section id={"projects"} className={"main-content"}>
            <div className={"row skill"}>
                <div className={"three columns header-col"}>
                    <h1><span>Projects</span></h1>
                </div>
                <div className={"nine columns main-col projects-bg"}>
                    <div className="slide--proj">
                        {
                            resumeData.projects && resumeData.projects.map((item) => {
                                return(
                                    <div className="proj--el">
                                        <div className="two--col">
                                            <div className="is-item has--img">
                                                <figure className="the-img">
                                                    <img style={{height: '250px', width: '250px'}} src={process.env.PUBLIC_URL + "/" + item.image} alt=""/>
                                                </figure>
                                            </div>
                                            <div className="is-item has--content">
                                                <div className="is-item--inner">
                                                    <h1><span>{item.task}</span></h1>
                                                    <small><a href={item.url} target={"_blank"} style={{fontSize: '15px'}}>Link to project</a></small>  
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={"nine columns projects-sm"}>
                    {
                        resumeData.projects && resumeData.projects.map((data) => {
                            return (
                                <div className="timeline-card">
                                    <img style={{height: '250px', width: '250px'}} src={process.env.PUBLIC_URL + "/" + data.image} alt=""/>
                                    <div className="container">
                                        <h2><b>{data.task}</b></h2>
                                        <small><a href={data.url} target={"_blank"} style={{fontSize: '15px'}}>Link to project</a></small> 
                                        <p>{data.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}
export default Projects;
