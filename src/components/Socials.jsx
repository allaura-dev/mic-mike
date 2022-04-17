
import React from "react";
import Facebook from './SocialIcons/facebook.png';
import Twitter from './SocialIcons/twitter.png';
import LinkdIn from './SocialIcons/linkdin.png';
import YouTube from './SocialIcons/youtube.png';


function Socials() {
 return (
    <div id="socials">
        <div id="Icons">
            <a href="https://www.facebook.com/profile.php?id=100070430109033" alt="Facebook">
                <img src={ Facebook } alt="Main Logo" className="socialIcons" />
            </a>
            <a href="https://twitter.com/MikeWithAMicVO" alt="Twitter">
                <img src={ Twitter } alt="Main Logo" className="socialIcons"/>
            </a>
            <a href="https://www.linkedin.com/in/mike-with-a-mic-ba2837236/" alt="LinkdIn">
                <img src={ LinkdIn } alt="Main Logo" className="socialIcons" />
            </a>
            <a href="https://www.youtube.com/channel/UCDur0oODGcoCb3OWJJNYGig" alt="YouTube">
                <img src={ YouTube } alt="Main Logo" className="socialIcons" />
            </a>
            <h5 className="copyright">© Mike With A Mic 2022</h5>
        </div>
    </div>
 );
}

export default Socials;