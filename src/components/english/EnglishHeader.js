import React from "react";
import '../../styles/Header.css';
import TWflag from '../../images/TWFlag.png';
import SkyLogo from '../../images/SkyLogo.webp';
import Home from "../../images/icons/home.png";
import AboutUs from "../../images/icons/about-us.png";
import OurTeam from "../../images/icons/our-team.png";
import OurClasses from "../../images/icons/our-classes.png";
import ContactUs from "../../images/icons/contact-us.png";

export default function EnglishHeader() {
    return(
        <div id='header-wrapper-3'>
            <div id='header-wrapper-2'>
                <div id='header-wrapper-1'>
                    <img src={SkyLogo} id='header-logo' />
                    <div id='header-nav'>
                        <a href='../sky-website/#/home/en' title="Home">
                            <div className='header-btn english'>Home</div>
                            <img className="header-btn-icon" src={Home}/>
                        </a>
                        <a href='../sky-website/#/about-us/en' title="About Us" >
                            <div className='header-btn english'>About Us</div>
                            <img className="header-btn-icon" src={AboutUs}/>
                        </a>
                        <a href='../sky-website/#/our-team/en' title="Our Team">
                            <div className='header-btn english'>Our Team</div>
                            <img className="header-btn-icon" src={OurTeam}/>
                        </a>
                        <a href='../sky-website/#/our-classes/en' title="Our Classes" >
                            <div className='header-btn english'>Our Classes</div>
                            <img className="header-btn-icon" src={OurClasses}/>
                        </a>
                        <a href='../sky-website/#/contact-us/en' title="Contact Us">
                            <div className='header-btn english'>Contact Us</div>
                            <img className="header-btn-icon" src={ContactUs}/>
                        </a>
                    </div>
                    <div>
                        <a href='../sky-website/' id='header-language'>
                            <img class='header-language-flag' src={TWflag} />
                            <div class='header-language-name'>中文</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}