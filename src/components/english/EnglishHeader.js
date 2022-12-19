import React from "react";
import '../../styles/Header.css';
import TWflag from '../../images/TWFlag.png';
import SkyLogo from '../../images/SkyLogo.webp';

export default function EnglishHeader() {
    return(
        <div id='header-wrapper-3'>
            <div id='header-wrapper-2'>
                <div id='header-wrapper-1'>
                    <img src={SkyLogo} id='header-logo' />
                    <div id='header-nav'>
                        <a href='../#/home/en' className='header-btn english'>Home</a>
                        <a href='../#/about-us/en' className='header-btn english'>About Us</a>
                        <a href='../#/our-team/en' className='header-btn english'>Our Team</a>
                        <a href='../#/our-classes/en' className='header-btn english'>Our Classes</a>
                        <a href='../#/contact-us/en' className='header-btn english'>Contact Us</a>
                    </div>
                    <div>
                        <a href='../#/' id='header-language'>
                        <img class='header-language-flag' src={TWflag} />
                        <div>中文</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}