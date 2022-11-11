import React from "react";
import SkyBanner from '../../../images/SkyBanner.webp';
import '../../../styles/our-team/OurTeamInfo.css';

export default function EnglishOurTeamInfo(){
    return(
        <div id='english-our-team-info-container'>
            <img id='english-our-team-info-image' src={SkyBanner} />
            <div id='english-our-team-info-text-box'>
                <div id='english-our-team-info-title'>Sky Team</div>
                <div id='english-our-team-info-text'>
                    Sky Education employees are experienced and passionate individuals who have been 
                    handpicked for their roles. To be with us, means you enjoy being around children, 
                    also have a ton of patience and most importantly have a fun personality.Our small 
                    class sizes allow for one on one time with our teachers, giving your kid undivided 
                    attention no matter the subject. 
                </div>
            </div>
        </div>
    )
}