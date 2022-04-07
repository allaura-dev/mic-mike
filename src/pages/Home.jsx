import React from "react";
import Socials from "../components/Socials";
import Logos from "../components/Logos"

function Home(){
    return(
        <div>
            <div className="left-div">
                <Logos />
            </div>
            <div className="right-div">
                <div>
                    <h1 className="titles">Demos</h1>
                </div>
                <div>
                    <ul>
                        <li>
                        <button className="demo-btns">Audiobook</button>
                        </li>
                        <li>
                            <button className="demo-btns">Narration</button>
                        </li>
                        <li>
                            <button className="demo-btns">YouTube</button>
                        </li>
                    </ul>
                </div>
                <h1 className="titles title-lower">Professional. Percise. Persuasive.</h1>
            </div>
            <Socials />
        </div>
    );
}

export default Home;