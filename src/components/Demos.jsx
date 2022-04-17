
import React from "react";
import play from "react";
import Narration from "./demos/Narration.wav";

function Demos() {

 return (
    <div className="button-div">
        <ul>
            <li>
                <button className="demo-btns" onClick={() => Narration.play()}>Narration</button>
            </li>
            <li>
                <button className="demo-btns" onClick={() => Narration.play()}>Branding</button>
            </li>
            <li>
                <button className="demo-btns" onClick={() => Narration.play()}>Audiobooks</button>
            </li>
            <li>
                <button className="demo-btns" onClick={() => Narration.play()}>VideoGames</button>
            </li>
            <li>
                <button className="demo-btns" onClick={() => Narration.play()}>eLearning</button>
            </li>
            <li>
                <button className="demo-btns" onClick={() => Narration.play()}>Promos</button>
            </li>
            <li>
                <button className="demo-btns" onClick={() => Narration.play()}>Corporate</button>
            </li>
            <li>
                <button className="demo-btns" onClick={() => Narration.play()}>Trailers</button>
            </li>
            <li>
                <button className="demo-btns" onClick={() => Narration.play()}>Trailers</button>
            </li>
        </ul>
    </div>

 );
}

export default Demos;
