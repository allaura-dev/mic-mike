import React from "react";
import Socials from "../components/Socials";
import Logos from "../components/Logos"

function Rates(){
    return(
        <div>
            <div className="left-div">
                <Logos />
            </div>
            <div className="right-div">
                <div>
                    <h1 className="titles">Rates</h1>
                </div>
                <div className="paras">
                    <p>All rates are negotiable based on project requirements. Contact
                        today to discuss how i can help you! Guaranteed response within
                        24 hours, and the more detail you can provide on what you are looking
                        the better!</p>
                </div>
                <div>
                    <h1 className="titles title-lower">Professional. Percise. Persuasive.</h1>
                </div>
            </div>
            <Socials />
        </div>
    );
}

export default Rates;