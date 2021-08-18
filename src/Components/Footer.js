import React, {Component} from "react";
export default class Footer extends Component {
    render () {
        let resumeData = this.props.resumeData;
        return (
            <footer>
                <div className={"row"}>
                    <div className={"twelve columns"}>
                        <ul className={"social-links"}>
                            {
                                resumeData.socials && resumeData.socials.map((item) => {
                                    return (
                                        <li>
                                            <a href={item.url} target={"_blank"}>
                                                <i className={item.className}/>
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div id={"go-top"}><a className={"smoothscroll"} title={"Back to Top"} href={"#home"}><i className={"fas fa-home"}/></a></div>
                </div>
            </footer>
        );
    }
}
