import React from "react";
import SkyLogo2 from '../images/SkyLogo2.webp';
import FacebookLogo from '../images/FacebookLogo.webp';
import "../styles/EnglishFooter.css";

export default function EnglishFooter(){
    return(
        <div id='english-footer-container'>
            <div id='english-footer-phone-number'>02 2533 8263</div>
            <div id='english-footer-logo-container'>
                <img id='english-footer-sky-logo' src={SkyLogo2} />
                <a href='https://www.facebook.com/Skyeducation2008'><img id='footer-fb-logo'src={FacebookLogo} /></a>
            </div>
        </div>
    )
}