import React from "react";
import Socials from "../components/Socials";
import Logos from "../components/Logos"

function Bio(){
    return(
        <div>
            <div className="left-div">
                <Logos />
            </div>
            <div className="right-div">
                <div>
                    <h1 className="titles">Bio</h1>
                </div>
                <div className="paras">
                    <p>I have spent my entire career focused on the consumer 
                        and what is required to meet their needs. Through this experience
                        I have gained tremendous insight on not only what to say to people,
                        but how to say it. Iam here and ready to help you bring your 
                        creation to life.</p>
                </div>
                <h1 className="titles title-lower">Professional. Percise. Persuasive.</h1>
            </div>
            <Socials />
        </div>
    );
}

export default Bio;