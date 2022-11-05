import React from "react";
import SkyLogo2 from "../images/SkyLogo2.webp";
import '../styles/EnglishHero.css';

export default function EnglishHero() {
    return(
        <div id='english-hero-wrapper'>
            <div id='english-hero-container'>
                <img id='english-hero-logo' src={SkyLogo2} />
                <div id='english-hero-title'>WHY LEARN WITH US?</div>
            </div>
        </div>
    )
}