import React from "react";
import '../../styles/Header.css';
import USAflag from '../../images/USAflag.svg';
import SkyLogo from '../../images/SkyLogo.webp';

export default function EnglishHeader() {
    return(
        <div id='header-wrapper-3'>
            <div id='header-wrapper-2'>
                <div id='header-wrapper-1'>
                    <img src={SkyLogo} id='header-logo' />
                    <div id='header-nav'>
                        <a href='../en/home'>Home</a>
                        <a href='../en/about-us'>About Us</a>
                        <a href='../en/our-team'>Our Team</a>
                        <a href='../en/our-classes'>Our Classes</a>
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