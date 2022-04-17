import React from "react";
import Socials from "../components/Socials";
import Logos from "../components/Logos"
import Demos from "../components/Demos"

function Home(){
    return(
        <div>
            <div className="left-div">
                <Logos />
            </div>
            <div className="right-div">
                <div className="title-div">
                    <h1 className="titles">Demos</h1>
                </div>
                <Demos />
                <h1 className="titles title-lower">Professional. Percise. Persuasive.</h1>
            </div>
            <Socials />
        </div>
    );
}

export default Home;