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
                        <a href='/home/en'>Home</a>
                        <a href='/about-us/en'>About Us</a>
                        <a href='/our-team/en'>Our Team</a>
                        <a href='/our-classes/en'>Our Classes</a>
                        <a>Contact Us</a>
                    </div>
                    <div id='header-language'>
                        <a href='../'>
                        <img class='header-language-flag' src={USAflag} />
                        <div>English</div>
                        <div>^</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}