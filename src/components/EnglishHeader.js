import React from "react";
import '../styles/EnglishHeader.css';
import USAflag from '../images/USAflag.svg';

export default function EnglishHeader() {
    return(
        <div id='header-wrapper-3'>
            <div id='header-wrapper-2'>
                <div id='header-wrapper-1'>
                    <div id='english-header-logo'>sky</div>
                    <div id='english-header-nav'>
                        <div>Home</div>
                        <div>About Us</div>
                        <div>Our Team</div>
                        <div>Our Classes</div>
                        <div>Contact Us</div>
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