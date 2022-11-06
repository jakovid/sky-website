import React from "react";
import '../../styles/english/EnglishHeader.css';
import USAflag from '../../images/USAflag.svg';
import SkyLogo from '../../images/SkyLogo.webp';

export default function EnglishHeader() {
    return(
        <div id='header-wrapper-3'>
            <div id='header-wrapper-2'>
                <div id='header-wrapper-1'>
                    <img src={SkyLogo} id='english-header-logo' />
                    <div id='english-header-nav'>
                        <a href='./'>Home</a>
                        <a href='./about-us'>About Us</a>
                        <a href='./our-team'>Our Team</a>
                        <a href='./our-classes'>Our Classes</a>
                        <a>Contact Us</a>
                    </div>
                    <div id='english-header-language'>
                        <img class='english-header-language-flag' src={USAflag} />
                        <div>English</div>
                        <div>^</div>
                    </div>
                </div>
            </div>
        </div>
    )
}