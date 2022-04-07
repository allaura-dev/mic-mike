import React from "react";
import Socials from "../components/Socials";
import Logos from "../components/Logos"

function Contact(){
    return(
        <div>
            <div className="left-div">
                <Logos />
            </div>
            <div className="right-div">
                <div>
                    <h1 className="titles">Contact</h1>
                </div>
                <div>
                    <h1>Picture</h1>
                    <h1 className="titles title-lower-light">booking@mikewithamic.com</h1>
                    <h1 className="titles title-lower">Professional. Percise. Persuasive.</h1>
                </div>
            </div>
            <Socials />
        </div>
    );
}

export default Contact;