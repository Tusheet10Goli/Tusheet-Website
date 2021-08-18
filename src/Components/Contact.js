import React from "react";
function Contact() {
    React.useEffect(() => {
        document.querySelectorAll('.card').forEach(e => {
            e.addEventListener('click', () => window.location.href = e.dataset.redirect);
        });
    }, []);
    return (
        <section id={"contact"}>
            <div className={"row section-head"}>
                <h1><span>Contact Me</span></h1>
            </div>
            <div className="contact-info">
                <div className="card" data-redirect={"mailto:tgoli3@gatech.edu"}>
                    <i className="card-icon far fa-envelope"></i>
                    <p>tgoli3@gatech.edu</p>
                </div>

                <div className="card" data-redirect={"tel:470-350-4410"}>
                    <i className="card-icon fas fa-phone"></i>
                    <p href={"tel:470-350-4410"}>+1 470-350-4410</p>
                </div>

                <div className="card" data-redirect={"https://www.linkedin.com/in/tusheet"}>
                    <i className="card-icon fab fa-linkedin"></i>
                    <p href={"https://www.linkedin.com/in/tusheet"}>linkedin.com/in/tusheet</p>
                </div>
            </div>
        </section>
    )
}
export default Contact;
